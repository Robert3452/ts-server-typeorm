import { initConnection } from "../database/mysql";
import { config } from 'dotenv';
config()
import crypto from 'crypto-js';
import { getRepository, EntityTarget } from 'typeorm';
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

function genereateRandomToken() {
    return crypto.lib.WordArray.random(32).toString();
}

const apiKeys = [
    {
        val: "admin",
        token: genereateRandomToken(),
        scopes: adminScopes
    }, {
        val: "public",
        token: genereateRandomToken(),
        scopes: publicScopes
    }
]

export async function seedApiKeys() {
    try {
        await dropData(Scope);
        const promises = apiKeys.map(async apiKey => {
            const permissionRepo = apiKey.scopes.map(async (scope: string) => {
                const repo = getRepository(Permission).create({ permission: scope })
                return await getRepository(Permission).save(repo);
            });
            const scope = getRepository(Scope).create({
                token: apiKey.token,
                role: apiKey.val,
                permissions: await Promise.all(permissionRepo)
            });
            return await getRepository(Scope).save(scope);
        });
        await Promise.all(promises);
    } catch (error) {
        console.log(error);
    }
}

// seedApiKeys();