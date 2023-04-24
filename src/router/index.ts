import express from 'express';
import userRouter from './users-router';
import bookRouter from './books-router';
import authRouter from './auth-router';
const router = express.Router();

export default (): express.Router => {
  userRouter(router)
  bookRouter(router)
  authRouter(router)
  return router;
};
