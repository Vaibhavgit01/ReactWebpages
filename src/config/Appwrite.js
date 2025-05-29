import {Client, Account, Databases} from 'appwrite';


const client = new Client()

.setEndpoint(import.meta.env.VITE_APPWRITE_URL)
.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client,import.meta.env.VITE_APPWRITE_DATABASE_ID);