import express from 'express'
import { checkPermission, verifyToken } from '../middlewares/index'
import { addUserToProject, createProject, getJoinedProject, getProjectById, getProjectDetail, listProject, removeUserFromProject, updateProject } from '../controllers/project-controller'

export default (router : express.Router) => {
    router.get('/admin/list-project',verifyToken,checkPermission,listProject)
    router.post('/admin/project',verifyToken,checkPermission,createProject)
    router.post('/admin/project/:projectId/add-user-to-project/:userId',verifyToken,checkPermission,addUserToProject)
    router.get('/admin/project/:id',verifyToken,checkPermission,getProjectById)
    router.get('/user/joined-project/:id',verifyToken,getJoinedProject)
    router.put('/admin/project/:id',verifyToken,checkPermission,updateProject)
    router.delete('/admin/:projectId/project/:userId',verifyToken,checkPermission,removeUserFromProject)
    router.get('/user/project/:projectId',verifyToken,getProjectDetail)
    /* router.get('/priority',verifyToken,getPriority)
    router.put('/priority/:id',verifyToken,updatePriority)
    router.delete('/priority/hidden/:id',verifyToken,hiddenPriority) */

}