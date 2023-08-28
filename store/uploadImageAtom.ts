import { atom } from "recoil";

export const imageState = atom<File[]>({
    key: 'images',
    default: [],
});