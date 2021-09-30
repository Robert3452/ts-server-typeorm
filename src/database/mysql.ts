
import { createConnection } from 'typeorm';
import config from '../config';

createConnection()
    .then((_) => console.log(`Database connected on port ${config.TYPEORM_PORT}`))
    .catch((error) => console.log(error));
