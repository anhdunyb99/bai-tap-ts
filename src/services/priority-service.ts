import {PriorityDto} from "dtos/priority/priority.dto"
const db = require('../models/index')

const Priorities: any = db.Priority

export const createPriorities = async (createPriority: Partial<PriorityDto>) => {
    return await Priorities.create(createPriority)
}

export const getPriorities = async () => {
    return await Priorities.findAll({})
}

export const updatePriorities = async (updatePriority: Partial<PriorityDto>, priorityId: string) => {
    return await Priorities.update(updatePriority,{where : {
        id : priorityId
    }
    })
}

export const hiddenPriorities = async (priorityId: string) => {
    return await Priorities.destroy({ where: { id: priorityId } })
}