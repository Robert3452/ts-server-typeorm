import dotenv from 'dotenv';

dotenv.config();



const config = {
    PORT: process.env.PORT,
    DEV: process.env.ENVIRONMENT,
    TYPEORM_PORT: process.env.TYPEORM_PORT
}

export default config;