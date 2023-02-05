import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const result = await axios.post("http://localhost:5000/login", {
          email: credentials.email,
          password: credentials.password,
        });
        const user = await result.json()

      // If no error and we have user data, return it
      if (result.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
      },
    }),
  ],
});
