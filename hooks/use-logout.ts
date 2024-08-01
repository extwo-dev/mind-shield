import { deleteSession, verifySession } from "@/utils/auth/session";

export const useLogout = () => {
  const logout = () => {
    verifySession().then((id) => {
      localStorage.removeItem(String(id));
      deleteSession();
    });
  };

  return logout;
};
