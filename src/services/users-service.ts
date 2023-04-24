import express from 'express'
import ICreateUserDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
const db = require('../models')
const Users: any = db.users


export const getListUsers = async () => {
    return await Users.findAll({})
}

export const getUserByIds = async (userId : string) => {
    return await Users.findOne({ where: { id: userId } })
}

export const createUsers = async (createUserDto : Partial<ICreateUserDto>) =>{
    return await Users.create(createUserDto)
}

export const updateUsers = async (updateUserDto : Partial<IUpdateUserDto>) =>{
    return await Users.create(updateUserDto)
}


export const deleteUsers = async (userId : string) => {
    return await Users.destroy({ where: { id: userId } })
}