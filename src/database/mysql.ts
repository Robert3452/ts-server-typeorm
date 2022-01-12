import { createConnection, Connection } from "typeorm";
import config from "../config";
export async function initConnection() {
  try {
    const connection: Connection = await createConnection();
    console.log(`Database connected on port ${config.TYPEORM_PORT}`);
    return connection;
  } catch (error) {
    console.log(error);
  }
}

initConnection();