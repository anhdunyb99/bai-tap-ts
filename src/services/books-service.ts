import ICreateBookDto from '../dtos/book/book.dto'
import IUpdateBookDto from '../dtos/book/book.dto'
const db = require ('../models')

const Book: any = db.book
export const getListBooks = async () => {
    return await Book.findAll({})
}

export const getBookByIds = async (bookId : string) => {
    return await Book.findOne({ where: { id: bookId } })
}

export const createBooks = async (createUserDto : Partial<ICreateBookDto>) =>{
    return await Book.create(createUserDto)
}

export const updateBooks = async (updateUserDto : Partial<IUpdateBookDto>) =>{
    return await Book.create(updateUserDto)
}
