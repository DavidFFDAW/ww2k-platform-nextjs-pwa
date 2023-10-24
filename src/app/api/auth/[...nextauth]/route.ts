import NextAuth from "next-auth";
import { OPTIONS } from "./auth.options";

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
