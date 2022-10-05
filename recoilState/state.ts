import { atom } from "recoil";

export const searchTop = atom<string>({
  key: "searchTop",
  default: "",
});
