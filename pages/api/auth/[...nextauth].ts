import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"

const authOptions:NextAuthOptions ={
    providers: [
        SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID!,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
        })
      ],
      pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', 
        verifyRequest: '/auth/verify-request', 
        newUser: '/auth/new-user' 
      }
}


