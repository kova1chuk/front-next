import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // database: {
  //   type: "postgres",
  //   host: process.env.DATABASE_HOST,
  //   port: process.env.DATABASE_PORT,
  //   username: process.env.DATABASE_USERNAME,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME,
  //   ssl: true,
  //   extra: {
  //     ssl: {
  //       rejectUnauthorized: false,
  //     },
  //   },
  // },
  database: `${process.env.NEXT_PUBLIC_DATABASE_URL}?synchronize=true`,
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session: any, user: any) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async (token: any, user: any, account: any) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
    // async session(session: any, token: any, user: any) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken;
    //   return session;
    // },
    // async jwt(token: any, account: any) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // async session({ session, user, token }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};

const Auth = (req: any, res: any) => NextAuth(req, res, options);

export default Auth;
