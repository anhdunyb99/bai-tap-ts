import express from 'express'
import { verifyToken } from '../middlewares/index'
import { addUserToProject, createProject, getJoinedProject, getProjectById, getProjectDetail, listProject, removeUserFromProject, updateProject } from '../controllers/project-controller'

export default (router : express.Router) => {
    router.get('/admin/list-project',verifyToken,listProject)
    router.post('/admin/project',verifyToken,createProject)
    router.post('/admin/project/:projectId/add-user-to-project/:userId',verifyToken,addUserToProject)
    router.get('/admin/project/:id',verifyToken,getProjectById)
    router.get('/user/joined-project/:id',verifyToken,getJoinedProject)
    router.put('/admin/project/:id',verifyToken,updateProject)
    router.delete('/admin/:projectId/project/:userId',verifyToken,removeUserFromProject)
    router.get('/user/project/:projectId',verifyToken,getProjectDetail)
    /* router.get('/priority',verifyToken,getPriority)
    router.put('/priority/:id',verifyToken,updatePriority)
    router.delete('/priority/hidden/:id',verifyToken,hiddenPriority) */

}