import express from 'express'
import { checkPermission, verifyToken } from '../middlewares/index'
import { createPriority, getPriority, hiddenPriority, updatePriority } from '../controllers/priority-controller'
export default (router : express.Router) => {
    router.post('/priority',verifyToken,checkPermission,createPriority)
    router.get('/priority',verifyToken,checkPermission,getPriority)
    router.put('/priority/:id',verifyToken,checkPermission,updatePriority)
    router.delete('/priority/hidden/:id',verifyToken,checkPermission,hiddenPriority)

}