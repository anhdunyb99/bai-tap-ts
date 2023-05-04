import express from 'express'
import ITask from 'dtos/task-interface/task-interface'
import { includes } from 'lodash'

const db = require('../models/index')
const Task: any = db.Task
const Project: any = db.Project
export const createTasks = async (createTask: Partial<ITask>) => {
    return await Task.create(createTask)
}

// get task by project id 
export const getTaskByProjectIds = async (projectId: string) => {
    const listTask = await Project.findOne({
        where: { id: projectId },
        include: [
            {
                model: db.Task,
                /* order: [['order', 'ASC']], */
                attributes: ['id', 'name','order'],
                include: [{
                    model: db.Status,
                    attributes: ['id', 'name'],
                },
                {
                    model: db.Priority,
                    attributes: ['id', 'name'],
                },
                {
                    model: db.Type,
                    attributes: ['id', 'name', 'color'],
                }
                ],
            }
        ],
        
    })
    
    /* data.sort((a, b) => a.order - b.order); */
    listTask.Tasks.sort((a : any,b : any) => a.order - b.order)
    return listTask.Tasks
}

// update task
export const updateTasks = async (updateTask: Partial<ITask>, taskId : string) => {
    return await Task.update(updateTask,{
        where : { id : taskId}
    })
}

// delete task
export const deleteTasks = async (taskId: string) => {
    return await Task.destroy({ where: { id: taskId } })
}

// get personal task
export const getPersonalTasks = async (userId: string) => {
    const tasks : any = await Task.findAll({
        where : { userId},
        include: [{
            model : db.Status,
            attributes: ['id', 'name'],
        },
        {
            model: db.Priority,
            attributes: ['id', 'name'],
        },
        {
            model: db.Type,
            attributes: ['id', 'name','color'],
        }
    ]
    })
    return tasks
    
}