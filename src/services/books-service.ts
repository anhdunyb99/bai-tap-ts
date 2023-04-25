import ICreateBookDto from '../dtos/book/book.dto'
import IUpdateBookDto from '../dtos/book/book.dto'
const db = require('../models/index')

const Book: any = db.Book
const User: any = db.User
export const getListBooks = async () => {
    return await Book.findAll({})
}

export const getBookByIds = async (bookId: string) => {
    return await Book.findOne({ where: { id: bookId } })
}

export const createBooks = async (createUserDto: Partial<ICreateBookDto>) => {
    return await Book.create(createUserDto)
}

export const updateBooks = async (updateUserDto: Partial<IUpdateBookDto>) => {
    return await Book.create(updateUserDto)
}

export const deleteBooks = async (bookId: string) => {
    return await Book.destroy({ where: { id: bookId } })
}

export const getBookByUserId = async (userId: string) => {
    const user: any = await User.findOne({
        where: { id: userId },
        include: db.Book,
    });
    
    const books = user?.Books || [];
    return books;
}
