import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { checkPermission, verifyToken } from '../middlewares/index'
import { createStatus, getStatus, hiddenStatus, updateStatus } from '../controllers/status-controller'

export default (router : express.Router) => {
    router.post('/admin/status',verifyToken,checkPermission,createStatus) // create status
    router.get('/admin/status',verifyToken,checkPermission,getStatus) // get all status
    router.put('/admin/status/:id',verifyToken,checkPermission,updateStatus) // update status
    router.delete('/admin/status/hidden/:id',verifyToken,checkPermission,hiddenStatus) // update status
}