import express from 'express'
import { Registers } from '../services/auth-service'
import { createUsers } from '../services/users-service'
import * as argon2 from 'argon2';
const jwt = require('jsonwebtoken')
const db = require('../models/index')
const Users: any = db.User
const Code: any = db.Code
const Token:any = db.Token
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
        //hash password
        let hashPassword = await argon2.hash(req.body.password)
        req.body.password = hashPassword
        const newUser = await createUsers(req.body)

        // return token
        const accessToken = jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN,
            { expiresIn: '1h' }
        );
        // refresh token
        let refreshToken : string = ''
        refreshToken = jwt.sign(
            { userId: newUser.id },
            process.env.REFRESH_TOKEN, { expiresIn: '7d' }
        );
        // disable invite code
        await Code.update({ status: false }, { where: { id: checkCode.id }, })
        res.json({
            success: true,
            message: 'Register successfully',
            accessToken,
            refreshToken
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
        let refreshToken: string = ''
        const condition = await Users.findOne({ where: { username: req.body.username } })
        //check trung ten

        if (!condition) {
            return res
                .status(400)
                .json({ success: false, message: "Incorect username or password" });
        }

        // userfound
        const isPasswordValid = await argon2.verify(condition.password,req.body.password)
     
        if (isPasswordValid && condition.status === "active") {
            //create access token
            accessToken = jwt.sign(
                { userId: condition.id },
                process.env.ACCESS_TOKEN, { expiresIn: '1h' }
            );
            //create refresh token
            refreshToken = jwt.sign(
                { userId: condition.id },
                process.env.REFRESH_TOKEN, { expiresIn: '7d' }
            );

            const expiryDate : Date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

            // luu refresh token vao db
            await Token.create({
                token : refreshToken,
                expired : expiryDate,
                userId : condition.id
            })
            
        } else {
            return res
                .status(400)
                .json({ success: false, message: "Your account might be suppend or wrong usename,password" });
        }

        res.json({
            success: true,
            message: 'Login successfully',
            accessToken,
            refreshToken
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}


// use refreshtoken to refresh token
export const refreshAccessToken = async (req: express.Request, res: express.Response) => {

    try {
        const refreshToken : string = req.body.refreshToken
        let accessToken : string = ''
        const condition = await Token.findOne({where : {token : refreshToken}})
        if(condition){
            // refresh token hop le
            accessToken = jwt.sign(
                { userId: condition.id },
                process.env.ACCESS_TOKEN, { expiresIn: '1h' }
            );
            res.json({
                success: true,
                message: 'Refresh token successfully',
                accessToken
            })
        } else {
            // refresh token k hop le
            return  res.sendStatus(401);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
     
}