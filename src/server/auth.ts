import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
import { env } from "@/env.mjs";
import { prisma } from "@/server/db";

// Providers:
import GithubProvider from "next-auth/providers/github";

// Extend types:
declare module "next-auth" {
  interface Session {
    user?: {
      username?: string | undefined;
    } & DefaultSession["user"];
  }

  interface User {
    username?: string | undefined;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: {
      username: string | undefined;
    } & DefaultSession["user"];
  }
}

// Auth Options:
export const authOptions: NextAuthOptions = {
  // Main Adapter & Session:
  adapter: PrismaAdapter(prisma),
  // Callbacks:
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.username,
      },
    }),
    // Redirect to "/" after sign in:
    redirect() {
      return "/";
    },
  },
  // Providers:
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID || "",
      clientSecret: env.GITHUB_CLIENT_SECRET || "",
      profile(profile: {
        id: number;
        avatar_url: string | null | undefined;
        name?: string | null;
        username?: string;
        email?: string | null;
        image?: string | null;
        login: string | undefined;
      }) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  // Pages:
  pages: {
    signIn: "/sign-in",
  },
};

// Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file:
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export const getAuthSession = () => getServerSession(authOptions);
