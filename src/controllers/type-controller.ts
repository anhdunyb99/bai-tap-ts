import express from 'express'
import { createTypes, getTypes, hiddenTypes, updateTypes } from '../services/type-service'
// create type 
export const createType = async (req: express.Request, res: express.Response) => {
    try {
        const type: any = await createTypes(req.body)
        res.json({
            success: true,
            message: 'Create type successfully',
            data: type
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get all type

export const getType = async (req: express.Request, res: express.Response) => {
    try {
        const type: any = await getTypes()
        res.json({
            success: true,
            message: 'Create type successfully',
            data: type
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// update type 
// get all type

export const updateType = async (req: express.Request, res: express.Response) => {
    try {
       
        const type: any = await updateTypes(req.body,req.params.id)
        res.json({
            success: true,
            message: 'Get type successfully',
            data: req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//hidden 
export const hiddenType = async (req: express.Request, res: express.Response) => {
    try {
       
        const type: any = await hiddenTypes(req.params.id)
        res.json({
            success: true,
            message: 'hidden type successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}