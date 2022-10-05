import { atom } from "recoil";

export const searchTop = atom<string>({
  key: "searchTop",
  default: "",
});
export const searchState = atom<string[]>({
  key: "searchState",
  default: [],
});
