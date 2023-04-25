import express from 'express'
import { createUser , getListUser , updateUser , getUserById  , deleteUser  , rentBook  , listRentBooks } from '../controllers/users-controller'
import { verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/users',verifyToken,createUser)
    router.get('/users',verifyToken,getListUser)
    router.put('/users/:id',verifyToken,updateUser)
    router.get('/users/:id',verifyToken,getUserById)
    router.delete('/users/:id',verifyToken,deleteUser)

    router.post('/:userId/rent/:bookId',verifyToken,rentBook)
    router.get('/:userId/rent/:bookId',verifyToken,listRentBooks)
}