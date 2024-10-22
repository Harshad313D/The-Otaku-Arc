import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);     
            
    }
    

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    

    // async login({email, password}) {
    //     try {
    //         await this.account.createEmailPasswordSession(email, password); // Ensure this is called after creating the user
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async login({ email, password }) {
    try {
        const session = await this.account.createEmailPasswordSession(email, password);
        return session;  // Return the session object
    } catch (error) {
        throw error;  // Throw the error for the calling function to catch
    }
}


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            // console.error('Client:', this.client);
            // throw error;        
        }

    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

