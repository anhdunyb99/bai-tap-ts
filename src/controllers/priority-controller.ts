import express from 'express'
import { createPriorities, getPriorities, hiddenPriorities, updatePriorities } from '../services/priority-service';

// create priority

export const createPriority= async (req: express.Request, res: express.Response) => {
    try {
        console.log('123');
        
        console.log(req.body);
        
        const priority: any = await createPriorities(req.body)
        res.json({
            success: true,
            message: 'Create priority successfully',
            data: priority
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}


// get all priorities
export const getPriority = async (req: express.Request, res: express.Response) => {
    try {
        const priority: any = await getPriorities()
        res.json({
            success: true,
            message: 'get priority successfully',
            data: priority
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}


// update type

export const updatePriority = async (req: express.Request, res: express.Response) => {
    try {
        const priority: any = await updatePriorities(req.body,req.params.id)
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
export const hiddenPriority = async (req: express.Request, res: express.Response) => {
    try {
       
        const priority: any = await hiddenPriorities(req.params.id)
        res.json({
            success: true,
            message: 'hidden priority successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}