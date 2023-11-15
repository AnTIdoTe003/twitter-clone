import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { CredentialsProvider } from "next-auth/providers/credentials";

export const options :NextAuthOptions ={
    providers:[
        GoogleProvider({
            clientId: process.env.CLINET_ID as string,
            clientSecret: process.env.CLIENT_SECRET_KEY as string
        })
    ]
}