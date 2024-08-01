import { TRPCError } from "@trpc/server";
import { router, procedure } from "@/server";
import { prisma } from "@/utils/prisma/client";
import { signUpFormSchema } from "@/app/auth/sign-up/_schema/sign-up-schema";
import { signInFormSchema } from "@/app/auth/sign-in/_schema/sign-in-schema";

export const authRouter = router({
  signIn: procedure.input(signInFormSchema).mutation(async (opts) => {
    const { phoneNumber, password } = opts.input;

    const user = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (user === null || phoneNumber !== user.phoneNumber) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Пользователя с указанным номером телефона не существует",
      });
    }

    if (password !== user.password) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Неправильный пароль, попробуйте другой",
      });
    }

    return {
      user: user,
    };
  }),

  signUp: procedure.input(signUpFormSchema).mutation(async (opts) => {
    const { phoneNumber } = opts.input;

    let user = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (user) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Пользователь с указанным номером телефона уже существует",
      });
    }

    user = await prisma.user.create({
      data: opts.input,
    });

    return {
      user: user,
    };
  }),
});
