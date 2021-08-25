import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import config from './config';
import { createConnection } from 'typeorm'
const { PORT } = config;
import routes from './routes';
const app = express();
createConnection();

import {
    errorHandler,
    logErrors,
    wrapErrors
} from './middlewares/errorHandler';
import notFoundHandler from './middlewares/notFoundHandler'

app.set('port', PORT);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use('/api', routes);

app.use('/uploads', express.static(path.resolve('uploads')));


app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.use(notFoundHandler);

export default app;