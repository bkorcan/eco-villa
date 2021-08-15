import create from 'zustand'

const useStore = create((set) => ({
bears:1,
increaseBears: () => set(state => ({ bears: state.bears +1 })),
}));

export   {useStore};
