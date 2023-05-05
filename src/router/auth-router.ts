import express from 'express'
import { Register , Login, refreshAccessToken } from '../controllers/auth-controller'

export default (router: express.Router) => {
    router.post('/register', Register)
    router.post('/login',Login)
    router.post('/refresh-token',refreshAccessToken)
}