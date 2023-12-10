import { create } from 'zustand';

const useStorePackage = create((set) => ({
  loggedIn: localStorage.getItem("userToken") ? true : false,
  userToken: localStorage.getItem("userToken") || "",
  userRole: localStorage.getItem("userRole") || "",
  userName: localStorage.getItem("userName") || "",

  login: (token, role, userName) => {
    set({ loggedIn: true, userToken: token, userRole: role, userName: userName });
    console.log("User token:", token);
    localStorage.setItem("userToken", token);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userName", userName);
  },

  logout: () => {
    set({ loggedIn: false, userToken: null });
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
  },
}));

export default useStorePackage;