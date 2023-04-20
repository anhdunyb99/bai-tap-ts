import express from 'express'
import { bai1 , bai2 , bai3 , bai4 , bai5 , bai6 , bai7 , bai8} from '../controllers/buoi2'
export default (router: express.Router) => {
    router.get('/buoi2/bai1', bai1)
    router.get('/buoi2/bai2', bai2)
    router.get('/buoi2/bai3', bai3)
    router.get('/buoi2/bai4', bai4)
    router.get('/buoi2/bai5', bai5)
    router.get('/buoi2/bai6', bai6)
    router.get('/buoi2/bai7', bai7)
    router.get('/buoi2/bai8', bai8)
};