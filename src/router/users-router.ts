import express from 'express'
import { createUser , getListUser , updateUser , getUserById , deleteUser , rentBook , getListRentBook} from '../controllers/users-controller'

export default (router : express.Router) => {
    router.post('/users/create-user',createUser)
    router.get('/users/get-list-user',getListUser)
    router.put('/users/update-user/:id',updateUser)
    router.get('/users/get-user-by-id/:id',getUserById)
    router.delete('/users/delete-user/:id',deleteUser)

    //rent 
    router.post('/users/rent-book/:id',rentBook)
    router.get('/users/get-list-rent-book/:id',getListRentBook)
}