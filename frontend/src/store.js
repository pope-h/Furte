import { create } from 'zustand';

const useStorePackage = create((set) => ({
    userToken: localStorage.getItem('userToken') || '',
    userRole: localStorage.getItem('userRole') || '',

    login: (token, role) => {
        set({ userToken: token, userRole: role });
        localStorage.setItem('userToken', token);
        localStorage.setItem('userRole', role);
    },

    logout: () => {
        set({ userToken: null });
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRole');
    }
}));

export default useStorePackage;