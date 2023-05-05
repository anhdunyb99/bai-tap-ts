const db = require('../models/index')
const { Op } = require('sequelize');
/* import IStatusesDto from "dtos/status/status.dto" */
import { ProjectDto } from "../dtos/project/project.dto";
import { createTasks } from "./task-service"
const Project: any = db.Project
const Users: any = db.User
const Tasks: any = db.Task

export const createProjects = async (createIProject: Partial<ProjectDto>) => {
    return await Project.create(createIProject)
}

export const addUserToProjects = async (projectId: string, userID: string) => {
    //find project by id 
    const project = await Project.findByPk(projectId)
    // find user by ud
    const user = await Users.findByPk(userID)
    // update project && user relationship
    await project.addUser([user])
    console.log(user, project);
}


// get all joined user
export const getJoinedUser = async (projectId: string) => {
    const project: any = await Project.findOne({
        where: { id: projectId },
        include: db.User,
    });
    const users = project?.Users || [];

    return users
}
// get joined project
export const getJoinedProjects = async (userId: string) => {
    const user: any = await Users.findOne({
        where: { id: userId },
        include: db.Project,
    });
    const projects = user?.Projects || [];

    return projects
}
export const getProjects = async (projectId: string) => {
    const project: any = await Project.findOne({
        where: { id: projectId },
        include: [
            {
                model: db.User,
                through: { attributes: [] } // bỏ qua các trường không cần thiết trong bảng liên kết n-n
            },
            {
                model: db.Task,
                attributes: ['id', 'name'],
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
                    attributes: ['id', 'name','color'],
                }
            ],
                
            }
        ]
    });
    return project
}

export const updateProjects = async (updateIProject: Partial<ProjectDto>, projectId: string) => {
    return await Project.update(updateIProject, {
        where: {
            id: projectId
        }
    })
}

export const hiddenProjects = async (statusId: string) => {
    return await Project.destroy({ where: { id: statusId } })
}

export const removeUserFromProjects = async (userId: string, projectId: string) => {
    const user = await Users.findByPk(userId)
    await user.removeProjects(projectId)
}

export const listProjects = async () => {
    interface IList {
        id : string;
        name : string;
        slug : string;
        start_time : Date;
        end_time : Date;
        proccess : number;
        Tasks : any;
        taskCount : number ;
        dataValues : any;
    }
    const list : IList[] = await Project.findAll({
        attributes: ['id', 'name', 'slug', 'start_date', 'end_date', [db.sequelize.literal('(SELECT COUNT(*) FROM `tasks` WHERE `tasks`.`projectId` = `project`.`id`)'), 'taskCount'],
        ],
        include: [{ model: db.Task, attributes: [] }, {
            model: db.Task,
            attributes: ['id', 'name'],
            include: [{
                model: db.Status,
                attributes: ['id', 'name'],
                where: {
                    id: 2,
                },
            }]
        }]
    })

    // tinh procress
    list.forEach(obj => {
        obj.dataValues.proccess = obj.Tasks.length / obj.dataValues.taskCount
    });   
    return list
}


// get project detail
export const getProjectDetails = async (projectId: string) => {
    const detail = await Project.findOne({
        where : { id : projectId},
        attributes: ['id', 'name', 'slug', 'start_date', 'end_date', [db.sequelize.literal('(SELECT COUNT(*) FROM `tasks` WHERE `tasks`.`projectId` = `project`.`id`)'), 'taskCount']],
        include: [{ model: db.Task, attributes: [] }, {
            model: db.Task,
            attributes: ['id', 'name'],
            include: [{
                model: db.Status,
                attributes: ['id', 'name'],
                where: {
                    id: 2,
                },
            }]
        }]
    })
    // tinh process
    detail.dataValues.process = detail.Tasks.length / detail.dataValues.taskCount    
    return detail
}