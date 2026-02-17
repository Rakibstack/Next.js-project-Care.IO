
import { Connectdb } from "@/lib/Connectdb"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";

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
    }),
     GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token, user }) {
      if (token) {
        session.role = token.role
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {

      if (user) {
        token.email = user.email
        token.role= user.role
      }
      return token
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
