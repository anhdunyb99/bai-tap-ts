import express from 'express'
import { Registers } from '../services/auth-service'
import { createUsers } from '../services/users-service'
const jwt = require('jsonwebtoken')
const db = require('../models/index')
const Users: any = db.User
const Code: any = db.Code
//register

export const Register = async (req: express.Request, res: express.Response) => {

    if (!req.body.username || !req.body.password || !req.body.code) {
        return res
            .status(400)
            .json({ success: false, message: "Missing username or password or invite code" });
    }
    try {
        const condition = await Users.findOne({ where: { username: req.body.username } })
        //check trung ten

        if (condition) {
            return res
                .status(400)
                .json({ success: false, message: "Username already exist" });
        }

        const checkCode = await Code.findOne({ where: { code: req.body.code } })
        // check invite code
        if (!checkCode || checkCode.status != 1) {
            return res
                .status(400)
                .json({ success: false, message: "Your invite code are invalid" });
        }
        console.log(checkCode);

        // all good
        const newUser = await createUsers(req.body)

        // return token
        const accessToken = jwt.sign(
            { userId: newUser._id },
            'asdsadsadadqwe'
        );
        // disable invite code
        await Code.update({ status: false }, { where: { id: checkCode.id }, })
        res.json({
            success: true,
            message: 'Register successfully',
            accessToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

//login

export const Login = async (req: express.Request, res: express.Response) => {
    if (!req.body.username || !req.body.password) {
        return res
            .status(400)
            .json({ success: false, message: "Missing username or password" });
    }
    try {
        let accessToken: string = ''
        const condition = await Users.findOne({ where: { username: req.body.username } })
        //check trung ten

        if (!condition) {
            return res
                .status(400)
                .json({ success: false, message: "Incorect username or password" });
        }

        // userfound
        if (condition.password === req.body.password && condition.status === "active") {
            accessToken = jwt.sign(
                { userId: condition.id },
                'asdsadsadadqwe', { expiresIn: '1h' }
            );
        } else {
            return res
                .status(400)
                .json({ success: false, message: "Your account might be suppend or wrong usename,password" });
        }

        res.json({
            success: true,
            message: 'Login successfully',
            accessToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}
