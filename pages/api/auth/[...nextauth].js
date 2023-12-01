import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import clientPromise from "../../../lib/mongodb"
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
console.log(process.env)
export const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
    sigIn:'/login',

  },
session:{
  strategy:'jwt',
},
callbacks: {
  session: async ({ token, session }) => {
    if (session?.user && token.sub) {
      session.user.id = token.sub;
      console.log(token);
    }
    return session;
  }
}

}
export default NextAuth(authOptions)