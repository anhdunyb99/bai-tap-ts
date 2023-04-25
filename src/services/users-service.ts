import express from 'express'
import ICreateUserDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
import IRentBookDto from '../dtos/book/book.dto'

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

