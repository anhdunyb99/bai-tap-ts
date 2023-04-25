
import express from 'express'
import { getListUsers, getUserByIds, createUsers, updateUsers, deleteUsers } from "../services/users-service"
import { rentBooks, listRentBook } from '../services/books-service';
const moment = require('moment');
// create main model



// create user

export const createUser = async (req: express.Request, res: express.Response) => {
    try {
        const user: any = await createUsers(req.body)
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

    try {
        const listUser = await getListUsers()
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
    try {
        const updatedUser: any = await updateUsers(req.body, req.params.id)
        res.json({
            success: true,
            message: 'Update successfully',
            data: req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get user by id 

export const getUserById = async (req: express.Request, res: express.Response) => {

    try {
        const user = await getUserByIds(req.params.id)
        res.json({
            success: true,
            message: 'success',
            data: user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//delete user

export const deleteUser = async (req: express.Request, res: express.Response) => {

    try {
        await deleteUsers(req.params.id)
        res.json({
            success: true,
            message: 'Delete user successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}
// rent book

export const rentBook = async (req: express.Request, res: express.Response) => {
    try {
        await rentBooks(
            req.params.userId,
            req.params.bookId,
            req.body
        );
        console.log('123');

        res.json({
            success: true,
            message: 'Rent book successfully',

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get all rent book
export const listRentBooks = async (req: express.Request, res: express.Response) => {
    try {
        const data = await listRentBook(
            req.params.userId,
            req.params.bookId,
        );
        
        res.json({
            success: true,
            message: 'Rent book successfully',
            data : data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}
