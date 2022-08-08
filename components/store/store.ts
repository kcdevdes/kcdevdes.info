import { StatHelpText } from '@chakra-ui/react';
import create from 'zustand';

interface LanguageState {
  selectedLanguage: string;
  setLanguage: (language: string) => void;
}

const useStore = create<LanguageState>((set) => ({
  selectedLanguage: 'ENG',
  setLanguage: (language) => {
    set((state) => ({ ...state, selectedLanguage: language }));
  },
}));

export default useStore;
