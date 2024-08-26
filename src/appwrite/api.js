import {ID} from 'appwrite'
import { appwriteConfig, account, databases, storage, avatars } from "./config.js";

export async function createUserAccount(user){
    try{
        const newAccount = await account.create(
            ID.unique(),
            user[0],
            user[1],
            user[2]
        )
        
    }catch(err){console.log(err)}
}