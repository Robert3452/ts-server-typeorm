import { v2 as cloudinary } from 'cloudinary';
import config from '../config';

cloudinary.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_API_SECRET,
});

export const uploads = (file: any, folder: any) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(file, {
            resource_type: "auto",
            folder: folder
        }, (error: any, result: any) => {
            if (error)
                return reject(error)
            else
                return resolve({
                    url: result.url,
                    id: result.public_id
                })
        })
    })
}

export const deleteFiles = (public_ids: string[]) => {
    return new Promise((resolve, reject) => {
        cloudinary.api.delete_resources(public_ids,
            (error: any, result: any) => {
                if (error)
                    return reject(error)

                return resolve({
                    message: result
                })
            })
    })
}