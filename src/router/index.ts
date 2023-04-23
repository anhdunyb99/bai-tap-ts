import express from 'express';

import buoi1 from './buoi1'
import buoi2 from './buoi2'
import userRouter from './users-router';
import bookRouter from './books-router';
const router = express.Router();

export default (): express.Router => {
  userRouter(router)
  bookRouter(router)
  return router;
};
