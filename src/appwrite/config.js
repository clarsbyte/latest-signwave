import {Client, Account, Databases, Storage, Avatars} from 'appwrite'
import { ID } from 'appwrite'

export const appwriteConfig = {
    projectId: '66cb3ed80007c08962fe',
    url: 'https://cloud.appwrite.io/v1'
}

export const client = new Client()
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)


export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)
