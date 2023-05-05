import { TypeDto } from "../dtos/type/type.dto"
const db = require('../models/index')

const Types: any = db.Type

export const createTypes = async (createType: Partial<TypeDto>) => {
    return await Types.create(createType)
}

export const getTypes = async () => {
    return await Types.findAll({})
}

export const updateTypes = async (updateType: Partial<TypeDto>, typeId: string) => {
    return await Types.update(updateType,{where : {
        id : typeId
    }
    })
}

export const hiddenTypes = async (typeId: string) => {
    return await Types.destroy({ where: { id: typeId } })
}