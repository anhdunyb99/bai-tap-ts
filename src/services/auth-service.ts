const jwt = require('jsonwebtoken')
import IRegisterDto from '../dtos/user/user.dto'
import IUpdateUserDto from '../dtos/user/user.dto'
const db = require('../models/index')
const Users: any = db.User

export const Registers = async (registerDto : Partial<IRegisterDto>) => {
    
}