import { atom } from "recoil";

const asideToggle = atom<boolean>({
  key: "asideToggleAtom",
  default: false,
});

export default asideToggle;
