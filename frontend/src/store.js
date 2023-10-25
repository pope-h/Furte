import { create } from 'zustand';

const useStorePackage = create((set) => ({
    userToken: localStorage.getItem('userToken') || null,

    login: (token) => {
        set({ userToken: token });
        localStorage.setItem('userToken', token);
    },

    logout: () => {
        set({ userToken: null });
        localStorage.removeItem('userToken');
    }
}));

export default useStorePackage;