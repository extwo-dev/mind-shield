"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@prisma/client";
import { deleteSession, verifySession } from "@/utils/auth/session";
import { Button } from "@/components/ui/button";

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    verifySession().then((data) => {
      const id = String(data.userId);
      const user = localStorage.getItem(id);

      setUserData(JSON.parse(user!));
    });
  }, []);

  const handleLogout = () => {
    deleteSession();
    router.push("/auth/sign-in");
  };

  return (
    <div>
      <h1>
        {userData?.lastName} {userData?.name} {userData?.surname}
      </h1>
      <Button variant="destructive" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default DashboardPage;
