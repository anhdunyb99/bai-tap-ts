import express from 'express'
import { createStatuses, getStatuses, hiddenStatuses, updateStatuses } from '../services/status.service';

// create status

export const createStatus = async (req: express.Request, res: express.Response) => {
    try {
        const status: any = await createStatuses(req.body)
        res.json({
            success: true,
            message: 'Create use successfully',
            data: status
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get all type

export const getStatus = async (req: express.Request, res: express.Response) => {
    try {
        const status: any = await getStatuses()
        res.json({
            success: true,
            message: 'Create type successfully',
            data: status
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

// get all type

export const updateStatus = async (req: express.Request, res: express.Response) => {
    try {
       console.log('123');
       
        const type: any = await updateStatuses(req.body,req.params.id)
        res.json({
            success: true,
            message: 'Get status successfully',
            data: req.body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//hidden 
export const hiddenStatus = async (req: express.Request, res: express.Response) => {
    try {
       
        const type: any = await hiddenStatuses(req.params.id)
        res.json({
            success: true,
            message: 'hidden status successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}