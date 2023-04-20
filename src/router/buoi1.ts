import express from 'express'

import { bai1 , bai2 , bai3 , bai4 , bai5 , bai6 , bai7 , bai8 , bai9 , bai10 , bai11 , bai12 , bai13 , bai14 , bai15 , bai16 , bai17 , bai18 , bai19 , bai20} from '../controllers/buoi1'

export default (router: express.Router) => {
    router.get('/buoi1/bai1',bai1)
    router.get('/buoi1/bai2',bai2)
    router.get('/buoi1/bai3',bai3)
    router.get('/buoi1/bai4',bai4)
    router.get('/buoi1/bai5',bai5)
    router.get('/buoi1/bai6',bai6)
    router.get('/buoi1/bai7',bai7)
    router.get('/buoi1/bai8',bai8)
    router.get('/buoi1/bai9',bai9)
    router.get('/buoi1/bai10',bai10)
    router.get('/buoi1/bai11',bai11)
    router.get('/buoi1/bai12',bai12)
    router.get('/buoi1/bai13',bai13)
    router.get('/buoi1/bai14',bai14)
    router.get('/buoi1/bai15',bai15)
    router.get('/buoi1/bai16',bai16)
    router.get('/buoi1/bai17',bai17)
    router.get('/buoi1/bai18',bai18)
    router.get('/buoi1/bai19',bai19)
    router.get('/buoi1/bai20',bai20)
  };