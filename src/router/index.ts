import express from 'express';

import buoi1 from './buoi1'
import buoi2 from './buoi2'

const router = express.Router();

export default (): express.Router => {
  
  buoi1(router)
  buoi2(router)
  return router;
};
