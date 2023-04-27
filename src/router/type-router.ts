import express from 'express'
import { createType, getType, hiddenType, updateType } from '../controllers/type-controller'
import { verifyToken } from '../middlewares/index'
export default (router : express.Router) => {
    router.post('/types',verifyToken,createType) // create new type
    router.get('/types',verifyToken,getType) // get all type
    router.put('/types/:id',verifyToken,updateType) // update type
    router.delete('/types/hidden/:id',verifyToken,hiddenType) // update type
}