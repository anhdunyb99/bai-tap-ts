import express from 'express'
import { createTasks, getTaskByProjectIds } from '../services/task-service';

// create task

export const createTask = async (req: express.Request, res: express.Response) => {
    try {
        const task: any = await createTasks(req.body)
        res.json({
            success: true,
            message: 'Create task successfully',
            data: task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get task by project i
// create task

export const getTaskByProjectId = async (req: express.Request, res: express.Response) => {
    try {
        const task: any = await getTaskByProjectIds(req.params.projectId)
        res.json({
            success: true,
            message: 'Get task successfully',
            data : task
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}
