import { atom } from "recoil";

export const searchTop = atom<string>({
  key: "searchTop",
  default: "",
});
export const searchState = atom<string[]>({
  key: "searchState",
  default: [],
});
export const newRelisesState = atom<string[]>({
  key: "newRelisesState",
  default: [],
});
export const playState = atom<boolean>({
  key: "playState",
  default: false,
});
export const playingTrackState = atom<string>({
  key: "playingTrackState",
  default: "",
});
