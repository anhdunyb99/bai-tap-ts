import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { checkPermission, verifyToken } from '../middlewares/index'
import { createStatus, getStatus, hiddenStatus, updateStatus } from '../controllers/status-controller'

export default (router : express.Router) => {
    router.post('/status',verifyToken,checkPermission,createStatus) // create new type
    router.get('/status',verifyToken,checkPermission,getStatus) // get all type
    router.put('/status/:id',verifyToken,checkPermission,updateStatus) // update type
    router.delete('/status/hidden/:id',verifyToken,checkPermission,hiddenStatus) // update type
}