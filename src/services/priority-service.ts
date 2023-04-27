import IPrioritiesDto from "dtos/priority/priority.dto"
const db = require('../models/index')

const Priorities: any = db.Priority

export const createPriorities = async (createPriorityDto: Partial<IPrioritiesDto>) => {
    return await Priorities.create(createPriorityDto)
}

export const getPriorities = async () => {
    return await Priorities.findAll({})
}

export const updatePriorities = async (updatePriorityDto: Partial<IPrioritiesDto>, priorityId: string) => {
    return await Priorities.update(updatePriorityDto,{where : {
        id : priorityId
    }
    })
}

export const hiddenPriorities = async (priorityId: string) => {
    return await Priorities.destroy({ where: { id: priorityId } })
}