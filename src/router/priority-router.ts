import express from 'express'
import { verifyToken } from '../middlewares/index'
import { createPriority, getPriority, hiddenPriority, updatePriority } from '../controllers/priority-controller'
export default (router : express.Router) => {
    router.post('/priority',createPriority)
    router.get('/priority',verifyToken,getPriority)
    router.put('/priority/:id',verifyToken,updatePriority)
    router.delete('/priority/hidden/:id',verifyToken,hiddenPriority)

}