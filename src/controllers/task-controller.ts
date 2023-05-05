import express from 'express'
import { createTasks, deleteTasks, getPersonalTasks, getTaskByProjectIds, updateTasks } from '../services/task-service';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator'
import { TaskDto } from '../dtos/task/task.dto'
// create task

export const createTask = async (req: express.Request, res: express.Response) => {
    try {
        //validate body
        const taskDto = plainToClass(TaskDto,req.body)

        const errors = await validate(taskDto)

        if(errors.length > 0){
            return res.status(400).send(errors)
        }
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

// edit task
export const updateTask = async (req: express.Request, res: express.Response) => {
    try {
        //validate body
        const taskDto = plainToClass(TaskDto,req.body)

        const errors = await validate(taskDto)

        if(errors.length > 0){
            return res.status(400).send(errors)
        }
        const task: any = await updateTasks(req.body,req.params.taskId)
        res.json({
            success: true,
            message: 'Update task successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//delete task

export const deleteTask = async (req: express.Request, res: express.Response) => {

    try {
        await deleteTasks(req.params.taskId)
        res.json({
            success: true,
            message: 'Delete task successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

//get personal task

export const getPersonalTask = async (req: express.Request, res: express.Response) => {

    try {
        const tasks = await getPersonalTasks(req.params.userId)
        res.json({
            success: true,
            message: 'Get personal task successfully',
            data : tasks
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}