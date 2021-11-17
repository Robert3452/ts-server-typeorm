import dotenv from 'dotenv';

dotenv.config();



const config = {
    PORT: process.env.PORT,
    DEV: process.env.ENVIRONMENT,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    SECRET_JWT: process.env.SECRET_KEY,
    ADMIN_TOKEN: process.env.ADMIN_TOKEN,
    PUBLIC_TOKEN: process.env.PUBLIC_TOKEN,
    //Cloudinary
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
    
}

export default config;