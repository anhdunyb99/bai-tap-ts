import express from 'express'
import ICreateUser from '../dtos/user/user.dto'
import IUpdateUser from '../dtos/user/user.dto'
import IRentBookDto from '../dtos/book/book.dto'
import {CodeDto} from 'dtos/code-interface/code.dto'
import { getBookByUserId , getBookByIds } from './books-service'
import { log } from 'console'
const db = require('../models/index')
const Users: any = db.User
const Codes: any = db.Code


export const getListUsers = async () : Promise<void> => {
    return await Users.findAll({})
}

export const getUserByIds = async (userId: string) => {
    return await Users.findOne({ where: { id: userId },
    include : [{
        model: db.Project,
        through: { attributes: [] }
    },
    {
        model: db.Task,
    }
]
    
    })
}

export const createUsers = async (createUser: Partial<ICreateUser>) => {
    return await Users.create(createUser)
}

export const updateUsers = async (updateUser: Partial<IUpdateUser>, userId : string) => {
    return await Users.update(updateUser,{
        where : { id : userId}
    })
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

//get all user account 
export const getUserAccounts = async () => {
    return await Users.findAll({
        where : {roleId : 2}
    })
}

export const createInviteCodes = async (code: Partial<CodeDto>) => {
    return await Codes.create(code)
}