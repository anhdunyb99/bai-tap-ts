import express from 'express'
import { verifyToken } from '../middlewares/index'
import { createTask, getTaskByProjectId } from '../controllers/task-controller'


export default (router : express.Router) => {
    router.post('/admin/task',verifyToken,createTask)
    router.get('/user/task/:projectId',verifyToken,getTaskByProjectId)

}