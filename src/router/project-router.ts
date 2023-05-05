import express from 'express'
import { checkPermission, verifyToken } from '../middlewares/index'
import { addUserToProject, createProject, getJoinedProject, getProjectById, getProjectDetail, listProject, removeUserFromProject, updateProject } from '../controllers/project-controller'

export default (router : express.Router) => {
    router.get('/admin/list-project',verifyToken,checkPermission,listProject) // danh sach du an
    router.post('/admin/project',verifyToken,checkPermission,createProject) // tao du an
    router.post('/admin/project/:projectId/add-user-to-project/:userId',verifyToken,checkPermission,addUserToProject) // them nguoi vao du an
    router.get('/admin/project/:id',verifyToken,checkPermission,getProjectById) // chi tiet du an admin
    router.get('/user/joined-project/:id',verifyToken,getJoinedProject) // danh sach du an da tham gia
    router.put('/admin/project/:id',verifyToken,checkPermission,updateProject) // sua thong tin pj
    router.delete('/admin/:projectId/project/:userId',verifyToken,checkPermission,removeUserFromProject) // xoa nguoi dung khoi du an
    router.get('/user/project/:projectId',verifyToken,getProjectDetail) // chi tiet du an user
    /* router.get('/priority',verifyToken,getPriority)
    router.put('/priority/:id',verifyToken,updatePriority)
    router.delete('/priority/hidden/:id',verifyToken,hiddenPriority) */

}