const db = require('../models')
import express from 'express'

// create main model
const Users: any = db.users

// create user

export const createUser = async (req: express.Request, res: express.Response) => {
    console.log('req.body', req.body);

    let data = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        first_name: req.body.firstName,
        last_name: req.body.lastName

    }
    console.log('123');
    console.log('data', data);

    const user = await Users.create(data)
    /*  res.status(200).send(user) */
    try {
        res.json({
            success: true,
            message: 'Create use successfully',
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}
// get list user
export const getListUser = async (req: express.Request, res: express.Response) => {
    const listUser = await Users.findAll({})
    try {
        res.json({
            success: true,
            message: 'Get list successfully',
            data: listUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// update user

export const updateUser = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    const updatedUser = await Users.update(req.body , {where : {id : id}})
    try {
        res.json({
            success: true,
            message: 'Update successfully',
            data : req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get user by id 

export const getUserById = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    const user = await Users.findOne({ where: { id: id } })
    try {
        res.json({
            success: true,
            message: 'success',
            data : user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//delete user

export const deleteUser = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    await Users.destroy({where : {id : id}})
    try {
        res.json({
            success: true,
            message: 'Delete user successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}