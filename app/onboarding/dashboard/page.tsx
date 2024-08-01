"use client";

import { NextPage } from "next";

import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/use-logout";

const DashboardPage: NextPage = () => {
  const logout = useLogout();

  return (
    <div>
      <Button variant="destructive" onClick={logout}>
        Выйти
      </Button>
    </div>
  );
};

export default DashboardPage;
