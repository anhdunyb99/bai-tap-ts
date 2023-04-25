import express from 'express'
import { Register , Login } from '../controllers/auth-controller'
import { verifyToken } from 'middlewares'

export default (router: express.Router) => {
    router.post('/register', Register)
    router.post('/login',Login)
    
}