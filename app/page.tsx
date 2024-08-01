"use client";

import { trpc } from "@/utils/trpc";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  const listAllUsersQuery = trpc.users.list.useQuery();

  return (
    <>
      <pre>{JSON.stringify(listAllUsersQuery.data, null, 4)}</pre>
    </>
  );
};

export default HomePage;
