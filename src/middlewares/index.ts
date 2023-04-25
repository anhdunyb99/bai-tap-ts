import { NextFunction } from "express"

const jwt = require('jsonwebtoken')

export const verifyToken = (req : any, res : any, next : NextFunction)  => {
	const authHeader = req.header('Authorization')
	const token = authHeader && authHeader.split(' ')[1] 
    /* console.log('authHeader',authHeader); */
    
	if (!token)
		return res
			.status(401)
			.json({ success: false, message: 'Access token not found' })

	try {
		const decoded = jwt.verify(token, 'asdsadsadadqwe')
		req.userId = decoded.userId
		next()
	} catch (error) {
		console.log(error)
		return res.status(403).json({ success: false, message: 'Invalid token' })
	}
}

