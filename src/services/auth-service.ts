const jwt = require('jsonwebtoken')
import IRegister from '../dtos/user/user.dto'
import IUpdateUser from '../dtos/user/user.dto'
const db = require('../models/index')
const Users: any = db.User

export const Registers = async (register : Partial<IUpdateUser>) => {
    
}