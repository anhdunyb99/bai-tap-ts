const db = require('../models')
import express from 'express'

// create main model
const Book: any = db.book
// create book
export const createBook = async (req: express.Request, res: express.Response) => {
    let data = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        outdate : new Date(req.body.outdate)
    }
    
    const books = await Book.create(data)
    try {
        res.json({
            success: true,
            message: 'Create book successfully',
            data: books
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
     
}

// get list book
export const getListBook = async (req: express.Request, res: express.Response) => {
    const listBook = await Book.findAll({})
    try {
        res.json({
            success: true,
            message: 'Get list successfully',
            data: listBook
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get user by id 

export const getBookById = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    const book = await Book.findOne({ where: { id: id } })
    try {
        res.json({
            success: true,
            message: 'success',
            data : book
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// update book

export const updateBook = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    const updatedBook = await Book.update(req.body , {where : {id : id}})
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

//delete book

export const deleteBook = async (req: express.Request, res: express.Response) => {
    const id: any = req.params.id
    await Book.destroy({where : {id : id}})
    try {
        res.json({
            success: true,
            message: 'Delete book successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}