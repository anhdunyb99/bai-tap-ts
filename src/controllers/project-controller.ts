import express from 'express'
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator'
import { ProjectDto } from '../dtos/project/project.dto';
import { addUserToProjects, createProjects, getJoinedProjects, getProjectDetails, getProjects, listProjects, removeUserFromProjects, updateProjects } from '../services/project-service';

// create project

export const createProject = async (req: express.Request, res: express.Response) => {
    try {

        //validate body
        const projectDto = plainToClass(ProjectDto,req.body)

        const errors = await validate(projectDto)

        if(errors.length > 0){
            return res.status(400).send(errors)
        }
        
        const project: any = await createProjects(req.body)
        res.json({
            success: true,
            message: 'Create project successfully',
            data: project
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// add user to project
export const addUserToProject = async (req: express.Request, res: express.Response) => {
    try {
        const project: any = await addUserToProjects(req.params.projectId, req.params.userId)
        res.json({
            success: true,
            message: 'add user successfully',
            data: project
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// add get project
export const getProjectById = async (req: express.Request, res: express.Response) => {
    try {
        const project: any = await getProjects(req.params.id)
        res.json({
            success: true,
            message: 'get project successfully',
            data: project
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// update project
export const updateProject = async (req: express.Request, res: express.Response) => {
    try {
        //validate body
        const projectDto = plainToClass(ProjectDto,req.body)

        const errors = await validate(projectDto)

        if(errors.length > 0){
            return res.status(400).send(errors)
        }
        const project: any = await updateProjects(req.body, req.params.id)
        res.json({
            success: true,
            message: 'Update project successfully',
            data: req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// remove user from project
export const removeUserFromProject = async (req: express.Request, res: express.Response) => {
    try {
        console.log('remove user from project');

        const project: any = await removeUserFromProjects(req.params.userId, req.params.projectId)
        res.json({
            success: true,
            message: 'Remove user from project successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get list projects
export const listProject = async (req: express.Request, res: express.Response) => {
    try {
        const list: any = await listProjects()   
        res.json({
            success: true,
            message: 'Get list from project successfully',
            data : list
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get joined project

export const getJoinedProject = async (req: express.Request, res: express.Response) => {
    try {
        const data: any = await getJoinedProjects(req.params.id)     
        res.json({
            success: true,
            message: 'Get list from project successfully',
            data : data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get project detail
// get list projects
export const getProjectDetail = async (req: express.Request, res: express.Response) => {
    try {
        const data: any = await getProjectDetails(req.params.projectId)
        res.json({
            success: true,
            message: 'Get project detail successfully',
            data : data.dataValues
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}