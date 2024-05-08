import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/services/user";
import { ZodError } from "zod";

export default {
  providers: [
    Credentials({
      async authorize(credentials): Promise<any> {
        try {
          const validateFields = LoginSchema.safeParse(credentials);
          if (validateFields.success) {
            const { email, password } = validateFields.data;

            const user = await getUserByEmail(email);
            if (!user || !user.password) {
              return null;
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) return user;
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
