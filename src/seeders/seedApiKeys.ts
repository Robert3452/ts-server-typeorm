import "./database/mysql";
import crypto from 'crypto-js';
import { getRepository, EntityTarget, } from 'typeorm';
import { Scope } from '../Entity/Scope';
import { Permission } from '../Entity/Permission';

const dropData = async (entity: EntityTarget<unknown>) => {
    try {
        const result = await getRepository(entity)
            .createQueryBuilder()
            .delete()
            .execute();
        console.log(`Removing old scopes, result: ${result}`)
    } catch (error) {
        console.log(error)
    }
}

// dropData(Scope);
// dropData(Permission);


const adminScopes = [
    'signin:auth',
    'signup:auth',
    'read:users',
    'read:products',
    'read:stats',
    'create:products',
    'create:users',
    'delete:users'
]

const publicScopes = [
    'signin:auth',
    'signup:auth',
    'read:products'
]
