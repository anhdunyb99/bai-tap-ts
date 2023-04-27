import express from 'express';
import userRouter from './users-router';
import bookRouter from './books-router';
import authRouter from './auth-router';
import typeRouter from './type-router';
import statusRouter from './status-router';
import priorityRouter from './priority-router';
const router = express.Router();

export default (): express.Router => {
  userRouter(router)
  bookRouter(router)
  authRouter(router)
  typeRouter(router)
  statusRouter(router)
  priorityRouter(router)
  return router;
};
