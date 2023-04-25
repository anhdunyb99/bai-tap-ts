
import express from 'express'
import { getListUsers, getUserByIds , createUsers ,updateUsers , deleteUsers , rentBooks } from "../services/users-service"
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
        const updatedUser: any = await updateUsers(req.body)
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
/* export const rentBook = async (req: express.Request, res: express.Response) => {
    
    const userBook: any = await RentBook.findAll({ where: { users: req.params.id } })
    if (userBook.length > 3) {
        res.status(400).json({ success: false, message: "You rent too many books" })
    } else {
        let data: any = {
            books: req.body.book,
            users: req.params.id,
            start_time: new Date(req.body.startTime),
            end_time: new Date(req.body.startTime)
        }
        const rent = await RentBook.create(data)

        try {
            res.json({
                success: true,
                message: 'Rent book successfully',
                data: rent
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }

} */

// get list rent books


/* export const getListRentBook = async (req: express.Request, res: express.Response) => {
    const listRentBook: any = await RentBook.findAll({ where: { users: req.params.id } })

    try {
        res.json({
            success: true,
            message: 'Get list rent book successfully',
            data: listRentBook
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

} */

// out date book
export const rentBook = async (req: express.Request, res: express.Response) => {
    try {
        await rentBooks(
            req.params.bookId,
            req.params.userId,
            req.body
          );
        res.json({
            success: true,
            message: 'Rent book successfully',
            
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
     
}


