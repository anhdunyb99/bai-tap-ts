import ITypes from "dtos/type/type.dto"
const db = require('../models/index')

const Types: any = db.Type

export const createTypes = async (createType: Partial<ITypes>) => {
    return await Types.create(createType)
}

export const getTypes = async () => {
    return await Types.findAll({})
}

export const updateTypes = async (updateType: Partial<ITypes>, typeId: string) => {
    return await Types.update(updateType,{where : {
        id : typeId
    }
    })
}

export const hiddenTypes = async (typeId: string) => {
    return await Types.destroy({ where: { id: typeId } })
}