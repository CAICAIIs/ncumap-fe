import { create } from 'zustand';

interface MapStore {
    currentCategory: string;
    categories: string[];
    marks: Record<string, any[]>;

    setCategory: (category: string) => void;
    setCategories: (categories: string[]) => void;
    setMarks: (marks: Record<string, any[]>) => void;
}

export const useMapStore = create<MapStore>((set) => ({
    currentCategory: '全部',
    categories: ['全部', '活动'],
    marks: {},

    setCategory: (category) => set({ currentCategory: category }),
    setCategories: (categories) => set({ categories }),
    setMarks: (marks) => set({ marks }),
}));
