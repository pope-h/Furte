import { create } from "zustand";
import Cookies from "js-cookie";

const expirationTime = new Date();
expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000); // 10 minutes

const useStorePackage = create((set) => ({
  accessToken: Cookies.get("accessToken") || "",
  userRole: localStorage.getItem("userRole") || "",
  userName: localStorage.getItem("userName") || "",
  userId: "",
  searchQuery: "",

  login: (accessToken, role, userName, userId) => {
    console.log("User logged in", accessToken, role, userName, userId);
    set({ accessToken, userRole: role, userName, userId });
    Cookies.set("accessToken", accessToken, {
      expires: expirationTime,
      sameSite: "Lax", // set to None if using https
    });
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", userName);
  },

  logout: () => {
    set({ accessToken: "", userRole: "", userName: "", userId: "" });
    Cookies.remove("accessToken", { sameSite: "Lax" });
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
  },

  setSearchQuery: (searchQuery) => set({ searchQuery }),
  
}));

export default useStorePackage;
