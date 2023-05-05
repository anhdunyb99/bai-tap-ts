const db = require('../models/index')
import IStatuses from "dtos/status/status.dto"
const Status: any = db.Status

export const createStatuses = async (createStatuse: Partial<IStatuses>) => {
    return await Status.create(createStatuse)
}

export const getStatuses = async () => {
    return await Status.findAll({})
}

export const updateStatuses = async (updateType: Partial<IStatuses>, statusId: string) => {
    return await Status.update(updateType,{where : {
        id : statusId
    }
    })
}

export const hiddenStatuses = async (statusId: string) => {
    return await Status.destroy({ where: { id: statusId } })
}