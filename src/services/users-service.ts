import express from 'express'
import ICreateUserDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
import IRentBookDto from '../dtos/book/book.dto'
import { getBookByUserId , getBookByIds } from './books-service'
import { log } from 'console'
const db = require('../models/index')
const Users: any = db.User


export const getListUsers = async () => {
    return await Users.findAll({})
}

export const getUserByIds = async (userId: string) => {
    return await Users.findOne({ where: { id: userId } })
}

export const createUsers = async (createUserDto: Partial<ICreateUserDto>) => {
    return await Users.create(createUserDto)
}

export const updateUsers = async (updateUserDto: Partial<IUpdateUserDto>) => {
    return await Users.create(updateUserDto)
}


export const deleteUsers = async (userId: string) => {
    return await Users.destroy({ where: { id: userId } })
}

export const rentBooks = async (bookId: string, userId: string, rentBookDto: IRentBookDto) => {
    const user: any = await getUserByIds(userId)
    const rentedBooks: any = await getBookByUserId(userId);
    const bookNumber : number = rentedBooks.length
    if(bookNumber <= 3){
        const book: any = await getBookByIds(bookId);
        try {
            const result = await db.sequelize.transaction(async (t: any) => {
                await user.addBook(book, { through: rentBookDto }, { transaction: t });
                await Users.update(
                  { recent_rent_date: new Date() },
                  {
                    where: {
                      id: userId,
                    },
                  },
                  { transaction: t }
                );
              });
        } catch (error) {
            
        }
    }

}