import express from 'express';
import userRouter from './users-router';
import bookRouter from './books-router';
const router = express.Router();

export default (): express.Router => {
  userRouter(router)
  bookRouter(router)
  return router;
};
