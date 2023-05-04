import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { checkPermission, verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/types',verifyToken,checkPermission,createType) // create new type
    router.get('/types',verifyToken,checkPermission,getType) // get all type
    router.put('/types/:id',verifyToken,checkPermission,updateType) // update type
    router.delete('/types/hidden/:id',verifyToken,checkPermission,hiddenType) // update type
}