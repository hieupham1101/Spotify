import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state",
].join(",");

const params = {
  scope: scopes,
};

const LOGIN_URL =
  "https://account.spotify.com/authorize?" +
  new URLSearchParams(params).toString();

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: String(process.env.SPOTIFY_CLIENTS_ID),

      clientSecret: String(process.env.SPOTIFY_CLIENTS_ID_SECRET),
      authorization: LOGIN_URL,
    }),
  ],
  secret: String(process.env.JWT_SECRET),
  pages: {
    signIn: "/login",
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
