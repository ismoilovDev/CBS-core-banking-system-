import { z } from 'zod';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { LoginSchema } from '@/schemas';

async function getUser(email: string) {
   try {
      const user = { email: 'abbos@mail.uz', password: '1234' };
      return user
   } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
   }
}

export const { auth, signIn, signOut } = NextAuth({
   ...authConfig,
   providers: [
      Credentials({
         async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);

            if (validatedFields.success) {
               const { phone, password } = validatedFields.data;

               try {
                  const response = await fetch('https://todo.de-code.uz/api/login', {
                     method: 'POST',
                     headers: {
                        'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({ phone, password }),
                  });

                  if (response.ok) {
                     const user = await response.json();
                     return user;
                  } else {
                     return null;
                  }
               } catch (error) {
                  console.error('Failed to login:', error);
                  return null;
               }
            }

            return null;
         }
      }),
   ],
   pages: {
      signIn: "/auth/login"
   },
   callbacks: {

      async session({ token, session }) {
         // if (token.sub && session.user) {
         //    session.user.id = token.sub;
         // }

         // if (token.role && session.user) {
         //   session.user.role = token.role as UserRole;
         // }

         // if (session.user) {
         //   session.user.name = token.name;
         //   session.user.email = token.email;
         //   session.user.isOAuth = token.isOAuth as boolean;
         // }

         return session;
      },
   },
});