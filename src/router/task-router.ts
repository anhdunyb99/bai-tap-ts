import express from 'express'
import { checkPermission, verifyToken } from '../middlewares/index'
import { createTask, deleteTask, getPersonalTask, getTaskByProjectId, updateTask } from '../controllers/task-controller'


export default (router : express.Router) => {
    router.post('/admin/task',verifyToken,checkPermission,createTask)
    router.get('/user/task/:projectId',verifyToken,getTaskByProjectId)
    router.get('/user/personal-task/:userId',verifyToken,getPersonalTask)
    router.put('/user/task/:taskId',verifyToken,updateTask)
    router.delete('/user/task/:taskId',verifyToken,deleteTask)
}