import { create } from 'zustand';

const useAppStore = create((set) => ({
  lang: 'en',
  dir: 'ltr',
  setLang: (newLang = 'en') => {
    const newDir = newLang === 'fa' ? 'rtl' : 'ltr';
    set({ lang: newLang, dir: newDir });

    // update <html> attributes
    document.documentElement.lang = newLang;
    document.documentElement.dir = newDir;
  },
}));

export default useAppStore;
