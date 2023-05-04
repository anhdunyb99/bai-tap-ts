import express from 'express'
import ICreateUserDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
import IRentBookDto from '../dtos/book/book.dto'
import ICode from 'dtos/code-interface/code-interface'
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

export const createUsers = async (createUserDto: Partial<ICreateUserDto>) => {
    return await Users.create(createUserDto)
}

export const updateUsers = async (updateUserDto: Partial<IUpdateUserDto>, userId : string) => {
    return await Users.update(updateUserDto,{
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

export const createInviteCodes = async (code: Partial<ICode>) => {
    return await Codes.create(code)
}