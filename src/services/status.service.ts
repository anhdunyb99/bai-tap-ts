const db = require('../models/index')
import IStatusesDto from "dtos/status/status.dto"
const Status: any = db.Status

export const createStatuses = async (createStatuseDto: Partial<IStatusesDto>) => {
    return await Status.create(createStatuseDto)
}

export const getStatuses = async () => {
    return await Status.findAll({})
}

export const updateStatuses = async (updateTypeDto: Partial<IStatusesDto>, statusId: string) => {
    return await Status.update(updateTypeDto,{where : {
        id : statusId
    }
    })
}

export const hiddenStatuses = async (statusId: string) => {
    return await Status.destroy({ where: { id: statusId } })
}