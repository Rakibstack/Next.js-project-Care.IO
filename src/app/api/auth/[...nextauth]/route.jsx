

import { Connectdb } from "@/lib/Connectdb"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
  CredentialsProvider({

    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'email & password',
   
    credentials: {
      email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {

        const { email, password } = credentials 

        const user = await Connectdb("users").findOne({ email })
        
        if (!user) {
            return null
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (isPasswordValid) {
            return user
        }   

        return null

       }
  })
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
