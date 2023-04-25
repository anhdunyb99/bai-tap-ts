import express from 'express'
import ICreateUserDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
import IRentBookDto from '../dtos/book/book.dto'
/* import { getBookByUserId , getBookByIds } from './books-service' */
const Users = require('../models/user')


export const getListUsers = async () => {
    return await Users.find({})
}

export const getUserByIds = async (userId: string) => {
    return await Users.findById(userId)
}

export const createUsers = async (createUserDto: Partial<ICreateUserDto>) => {
    const newUser = new Users(createUserDto)
    await newUser.save()
    return newUser
}

export const updateUsers = async (updateUserDto: Partial<IUpdateUserDto>,userId : String) => {
    const condition = {
        _id : userId
    }
    return await Users.findOneAndUpdate(condition,updateUserDto)
}


export const deleteUsers = async (userId: string) => {
    const condition = {
        _id : userId
    }
    return await Users.findOneAndDelete(condition)
}

/* export const rentBooks = async (bookId: string, userId: string, rentBookDto: IRentBookDto) => {
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

} */