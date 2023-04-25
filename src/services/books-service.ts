import ICreateBookDto from '../dtos/book/book.dto'
import IUpdateBookDto from '../dtos/book/book.dto'
import IRentBookDto from '../dtos/book/book.dto'
const Book = require('../models/book')
const Users = require('../models/user')
export const getListBooks = async () => {
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

/* export const getBookByUserId = async (userId: string) => {
    const user: any = await User.findOne({
        where: { id: userId },
        include: db.Book,
    });
    
    const books = user?.Books || [];
    return books;
} */

export const rentBooks = async (userId: string, bookId: string, rentBookDto: IRentBookDto) => {

    console.log('rentBookDto', rentBookDto.start_time);
    /* console.log('rentBookDto', bookId); */
    await Users.updateOne(
        { _id: userId },
        { $push: { books: { book: bookId, start_time: rentBookDto.start_time, end_time: rentBookDto.end_time } } }
    )
    /* const data = await Users.findById(userId).populate('book')
    console.log('data',data); */
    await Book.updateOne(
        { _id: bookId },
        { $push: { user: userId } }
    )
}

// get all rent book
export const listRentBook = async (userId: string, bookId: string) => {
    const data = await Users.findById(userId).populate('books')
    return data.books
}
