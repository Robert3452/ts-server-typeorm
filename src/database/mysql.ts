
import { createConnection, Connection } from 'typeorm';
import { seedApiKeys } from '../seeders/seedApiKeys';
import config from '../config';
export async function initConnection() {
    try {
        const connection: Connection = await createConnection()
        await seedApiKeys();
        console.log(`Database connected on port ${config.TYPEORM_PORT}`)
        return connection;
    } catch (error) {
        console.log(error);
    }
}


initConnection();