import { create } from "zustand";
import Cookies from "js-cookie";

const expirationTime = new Date();
expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000); // 10 minutes

const useStorePackage = create((set) => ({
  accessToken: Cookies.get("accessToken") || "",
  userRole: localStorage.getItem("userRole") || "",
  userName: localStorage.getItem("userName") || "",

  login: (accessToken, role, userName) => {
    console.log("User logged in", accessToken, role, userName);
    set({ accessToken, userRole: role, userName });
    Cookies.set("accessToken", accessToken, {
      expires: expirationTime,
      sameSite: "Lax", // set to None if using https
    });
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", userName);
  },

  logout: () => {
    set({ accessToken: null });
    Cookies.remove("accessToken", { sameSite: "Lax" });
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    console.log(
      "User logged out",
      Cookies.get("accessToken"),
      localStorage.getItem("userRole"),
      localStorage.getItem("userName")
    );
  },
}));

export default useStorePackage;
