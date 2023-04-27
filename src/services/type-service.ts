import ITypesDto from "dtos/type/type.dto"
const db = require('../models/index')

const Types: any = db.Type

export const createTypes = async (createTypeDto: Partial<ITypesDto>) => {
    return await Types.create(createTypeDto)
}

export const getTypes = async () => {
    return await Types.findAll({})
}

export const updateTypes = async (updateTypeDto: Partial<ITypesDto>, typeId: string) => {
    return await Types.update(updateTypeDto,{where : {
        id : typeId
    }
    })
}

export const hiddenTypes = async (typeId: string) => {
    return await Types.destroy({ where: { id: typeId } })
}