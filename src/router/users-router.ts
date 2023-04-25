import express from 'express'
import { createUser , getListUser , updateUser , getUserById , deleteUser , rentBook } from '../controllers/users-controller'

export default (router : express.Router) => {
    router.post('/users',createUser)
    router.get('/users',getListUser)
    router.put('/users/:id',updateUser)
    router.get('/users/:id',getUserById)
    router.delete('/users/:id',deleteUser)

    router.post('/:userId/rent/:bookId',rentBook)
}