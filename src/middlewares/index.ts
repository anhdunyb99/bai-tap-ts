import { NextFunction } from "express"
import { RequestHandler } from 'express';
import { validate, validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";
const db = require('../models/index')
const jwt = require('jsonwebtoken')

export const verifyToken = (req: any, res: any, next: NextFunction) => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1]
	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Access token not found' })

	try {
		const decoded = jwt.verify(token,process.env.ACCESS_TOKEN)
		req.userId = decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}

export const checkPermission = async (req: any, res: any, next: NextFunction) => {
	try {
		const authHeader = req.header('Authorization')
		const token = authHeader && authHeader.split(' ')[1]
		const decoded = jwt.verify(token,process.env.ACCESS_TOKEN);	
		const user = await db.User.findByPk(decoded.userId)
		if (user.roleId == 1) {
			next()
		} else {

			return res.status(403).json({ success: false, message: 'You do not have permission' })
		}

	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'You do not have permission' })
	}
}

export const validateRequest = (type: any): RequestHandler => {
	return async (req, res, next) => {
	  try {
		const errors = await validate(new type(req.body));
		if (errors.length > 0) {
		  res.status(400).json(errors);
		} else {
		  next();
		}
	  } catch (error) {
		next(error);
	  }
	};
  };

