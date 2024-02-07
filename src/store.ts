import { create } from "zustand";

type SideBarStore = {
  expanded: boolean;
  setExpanded: () => void;
};

export const useSidebarStore = create<SideBarStore>((set) => ({
  expanded: true,
  setExpanded: () => {
    set((state) => ({ expanded: !state.expanded }));
  },
}));
