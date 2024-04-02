import NextAuth, { User } from 'next-auth';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  async session({ token, session }) {
    if (token.sub && session.user) {
      session.user.id = token.sub;
    }

    if (token.role && session.user) {
      session.user.role = token.role;
    }

    if (session.user) {
      session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
    }

    if (session.user) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.isOAuth = token.isOAuth as boolean;
    }

    return session;
  },
})

