import express from 'express'
import { createBook , getListBook , getBookById , updateBook , deleteBook } from '../controllers/books-controller'

export default (router: express.Router) => {
    router.post('/books/create-book', createBook)
    router.get('/books/get-list-book', getListBook)
    router.get('/books/get-book-by-id/:id', getBookById)
    router.put('/books/update-book/:id',updateBook)
    router.delete('/books/delete-book/:id',deleteBook)
}