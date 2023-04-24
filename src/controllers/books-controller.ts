
import express from 'express'
import { getListBooks , getBookByIds , createBooks , updateBooks , deleteBooks} from '../services/books-service'
// create main model

// create book
export const createBook = async (req: express.Request, res: express.Response) => {

    try {
        const books : any = await createBooks(req.body)
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
    
    try {
        const listBook : any = await getListBooks()
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

// get book by id 

export const getBookById = async (req: express.Request, res: express.Response) => {
    
    try {
        const book : any = await getBookByIds(req.params.id)
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
    
    try {
        const data : any = updateBooks(req.body)
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
    
    try {
        await deleteBooks(req.params.id)
        res.json({
            success: true,
            message: 'Delete book successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

