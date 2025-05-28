import {Client, Account, Databases} from 'appwrite';


const client = new Client()

client.setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("682e2cf5003b6fe3bf17");

export const account = new Account(client);
export const databases = new Databases(client,"682e2d21000dd01a5e6e");