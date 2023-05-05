import express from 'express'
import { checkPermission, verifyToken } from '../middlewares/index'
import { createPriority, getPriority, hiddenPriority, updatePriority } from '../controllers/priority-controller'
export default (router : express.Router) => {
    router.post('/admin/priority',verifyToken,checkPermission,createPriority)
    router.get('/admin/priority',verifyToken,checkPermission,getPriority)
    router.put('/admin/priority/:id',verifyToken,checkPermission,updatePriority)
    router.delete('/admin/priority/hidden/:id',verifyToken,checkPermission,hiddenPriority)

}