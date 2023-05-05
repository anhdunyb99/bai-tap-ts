import express from 'express'
import { createPriorities, getPriorities, hiddenPriorities, updatePriorities } from '../services/priority-service';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { PriorityDto } from '../dtos/priority/priority.dto';
// create priority

export const createPriority= async (req: express.Request, res: express.Response) => {
    try {
        // validate body
        const priorityDto = plainToClass(PriorityDto, req.body);
        const errors = await validate(priorityDto)

        if (errors.length > 0) {
            return res.status(400).send(errors)
        }

        // all good
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
        //validate body
        const priorityDto = plainToClass(PriorityDto,req.body)
        const error = await validate(priorityDto)

        if(error.length > 0) {
            return res.status(400).send(error)
        }
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