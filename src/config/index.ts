import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT,
    DEV: process.env.ENVIRONMENT,
}