import express from 'express'
import { createUser , getListUser , updateUser , getUserById , deleteUser , rentBook, createInviteCode, getUserAccount } from '../controllers/users-controller'
import { checkPermission, verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/users',checkPermission,createUser) //tao nguoi dung moi admin
    router.get('/admin/list-users',verifyToken,checkPermission,getListUser) // lay danh sach nguoi dung
    router.put('/users/:id',verifyToken,updateUser) // update thong tin ca nhan
    /* router.get('/admin/users',verifyToken,checkPermission,getUserAccount) */
    router.get('/users/:id',verifyToken,getUserById)
    router.delete('/admin/users/:id',verifyToken,checkPermission,deleteUser)
    router.post('/admin/invite-code',verifyToken,checkPermission,createInviteCode)
    /* router.post('/:userId/rent/:bookId',verifyToken,rentBook) */
}