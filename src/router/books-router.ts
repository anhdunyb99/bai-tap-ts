import express from 'express'
import { createBook , getListBook , getBookById , updateBook , deleteBook , getBooksByUserId} from '../controllers/books-controller'
import { verifyToken } from '../middlewares/index'
export default (router: express.Router) => {
    router.post('/books', verifyToken,createBook)
    router.get('/books',verifyToken, getListBook)
    router.get('/books/:id',verifyToken, getBookById)
    router.put('/books/:id',verifyToken,updateBook)
    router.delete('/books/:id',verifyToken,deleteBook)

    router.get("/books/rent/:id",verifyToken,getBooksByUserId)
}