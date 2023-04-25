import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://anhdunyb99:dung1999@cluster0.tvd2wmr.mongodb.net/?retryWrites=true&w=majority`)
    console.log('MongoDb Connected');
    
  } catch (error) {
    console.log(error.message);
    process.exit(1)
    
  }
}
connectDB()
server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});
 

/* const MONGO_URL = ''; // DB URI

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error)); */

app.use('/', router());
