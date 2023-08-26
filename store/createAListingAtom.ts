import { atom } from "recoil";

export const createAListingAtom  = atom({
    key: 'createAListing',
    default: {
        type: "rent",
        location: "",
        price: 0,
        contact: "000-0000-000",
        descrition: "",
        image: [] as any
    }
})