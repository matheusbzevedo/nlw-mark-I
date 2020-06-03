import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app
.use(cors)
.use(express.json())
.use(routes)
.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);