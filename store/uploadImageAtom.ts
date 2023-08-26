import { atom } from "recoil";

export const imageState = atom<any[]>({
    key: 'images',
    default: [],
});