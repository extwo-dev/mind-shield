import { prisma } from "@/utils/prisma/client";
import { procedure, router } from "..";

export const usersRouter = router({
  list: procedure.query(async () => {
    const users = await prisma.user.findMany();

    return users;
  }),
});
