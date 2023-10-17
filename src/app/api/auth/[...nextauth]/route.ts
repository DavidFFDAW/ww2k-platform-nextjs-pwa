import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/db/conn';
import bcrypt from 'bcrypt';

const OPTIONS: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            id: 'credentials',

            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'jsmith',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '********',
                },
            },
            async authorize(credentials): Promise<any> {
                if (!credentials?.password) throw new Error('Debes introducir una contraseña');

                const foundUser = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email,
                    },
                });

                if (!foundUser) {
                    throw new Error('No se ha encontrado este usuario');
                }

                const passwordMatch = await bcrypt.compare(credentials!.password, foundUser.password);

                if (!passwordMatch) {
                    throw new Error('La contraseña no coincide');
                }

                const user = {
                    id: foundUser.id,
                    name: foundUser.name,
                    username: foundUser.username,
                    email: foundUser.email,
                    api_token: foundUser.api_token,
                    role: foundUser.type,
                };

                console.log(user);

                return user;
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.user = user;

            return token;
        },
        session({ session, token }) {
            session.user = token.user as any;

            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
};

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
