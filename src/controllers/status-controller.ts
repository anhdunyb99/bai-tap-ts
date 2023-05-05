import express from 'express'
import { createStatuses, getStatuses, hiddenStatuses, updateStatuses } from '../services/status.service';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { StatusDto } from '../dtos/status/status.dto';
// create status

export const createStatus = async (req: express.Request, res: express.Response) => {
    try {
        //validate body
        const statusDto = plainToClass(StatusDto, req.body)

        const errors = await validate(statusDto)

        if (errors.length > 0) {
            return res.status(400).send(errors)
        }
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
        const statusDto = plainToClass(StatusDto, req.body)

        const errors = await validate(statusDto)

        if (errors.length > 0) {
            return res.status(400).send(errors)
        }
        const type: any = await updateStatuses(req.body, req.params.id)
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