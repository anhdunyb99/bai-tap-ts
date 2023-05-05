import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { checkPermission, verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/admin/types',verifyToken,checkPermission,createType) // create new type
    router.get('/admin/types',verifyToken,checkPermission,getType) // get all type
    router.put('/admin/types/:id',verifyToken,checkPermission,updateType) // update type
    router.delete('/admin/types/hidden/:id',verifyToken,checkPermission,hiddenType) // update type
}