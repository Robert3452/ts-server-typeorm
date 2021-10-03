import dotenv from 'dotenv';

dotenv.config();



const config = {
    PORT: process.env.PORT,
    DEV: process.env.ENVIRONMENT,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    SECRET_JWT: process.env.SECRET_KEY,
    ADMIN_TOKEN: process.env.ADMIN_TOKEN,
    PUBLIC_TOKEN: process.env.PUBLIC_TOKEN
}

export default config;