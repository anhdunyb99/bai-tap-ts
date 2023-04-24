import express from 'express'
import { createBook , getListBook , getBookById , updateBook , deleteBook } from '../controllers/books-controller'

export default (router: express.Router) => {
    router.post('/books', createBook)
    router.get('/books', getListBook)
    router.get('/books/:id', getBookById)
    router.put('/books/:id',updateBook)
    router.delete('/books/:id',deleteBook)
}