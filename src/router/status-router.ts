import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { verifyToken } from '../middlewares/index'
import { createStatus, getStatus, hiddenStatus, updateStatus } from '../controllers/status-controller'

export default (router : express.Router) => {
    router.post('/status',verifyToken,createStatus) // create new type
    router.get('/status',verifyToken,getStatus) // get all type
    router.put('/status/:id',verifyToken,updateStatus) // update type
    router.delete('/status/hidden/:id',verifyToken,hiddenStatus) // update type
}