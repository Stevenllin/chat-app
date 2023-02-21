import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app: Express = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env?.MONGO_URL ?? '').then(() => {
  console.log('DB Connection is successful')
}).catch((error) => {
  console.log(error.message)
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on Port ${process.env.PORT}`)
});
