import ICreateBookDto from '../dtos/book/book.dto'
import IUpdateBookDto from '../dtos/book/book.dto'
import IRentBookDto from '../dtos/book/book.dto'
const {MongoClient} = require('mongodb')
const uri = `mongodb+srv://anhdunyb99:dung1999@cluster0.tvd2wmr.mongodb.net/?retryWrites=true&w=majority`
const Bull = require('bull');
const queue = new Bull('my-queue', 'redis://127.0.0.1:6379');
const client = new MongoClient(uri)
const session = client.startSession()

const Book = require('../models/book')
const Users = require('../models/user')
export const getListBooks = async () => {
    const books = await Book.find({})
    queue.add({
        data: {
            message: 'Hello, world!'
        }
    });
    // create a worker for the queue
    queue.process((job: any, done: any) => {
        console.log(job.data.message);
        done();
    });


    return await Book.find({})

}

export const getBookByIds = async (bookId: string) => {
    return await Book.findById(bookId)
}

export const createBooks = async (createBookDto: Partial<ICreateBookDto>) => {
    const newBook = new Book(createBookDto)
    await newBook.save()
    return newBook
}

export const updateBooks = async (updateBookDto: Partial<IUpdateBookDto>, bookId: String) => {
    const condition = {
        _id: bookId
    }
    return await Book.findOneAndUpdate(condition, updateBookDto)
}

export const deleteBooks = async (bookId: string) => {
    const condition = {
        _id: bookId
    }
    return await Book.findOneAndDelete(condition)
}



export const rentBooks = async (userId: string, bookId: string, rentBookDto: IRentBookDto) => {

    try {
        await session.withTransaction(async () => {
            await Users.updateOne(
                { _id: userId },
                { $push: { books: { book: bookId, start_time: rentBookDto.start_time, end_time: rentBookDto.end_time } } }
            )
        
            await Book.updateOne(
                { _id: bookId },
                { $push: { user: userId } }
            )
        })
        await session.commmitTransaction()
    } catch (error) {
        await session.abortTransaction()
        console.error(error)
        
    } finally {
        session.endSession()
    }

    
}

// get all rent book by user
export const listRentBook = async (userId: string, bookId: string) => {
    const data = await Users.findById(userId).populate('books')
    return data.books
}
