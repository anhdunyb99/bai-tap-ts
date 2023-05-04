import express from 'express'
import { createUser , getListUser , updateUser , getUserById , deleteUser , rentBook, createInviteCode } from '../controllers/users-controller'
import { verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/users',createUser)
    router.get('/users',verifyToken,getListUser)
    router.put('/users/:id',verifyToken,updateUser)
    router.get('/users/:id',verifyToken,getUserById)
    router.delete('/users/:id',verifyToken,deleteUser)
    router.post('/admin/invite-code',verifyToken,createInviteCode)
    router.post('/:userId/rent/:bookId',verifyToken,rentBook)
}