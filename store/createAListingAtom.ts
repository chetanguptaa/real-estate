import { atom } from "recoil";

export const createAListingAtom  = atom({
    key: 'createAListing',
    default: {
        type: "rent",
        location: "",
        pricePerSqFeet: '0',
        pricePerMonth: '0',
        contact: "000-0000-000",
        description: "",
        image: [] as Array<String>
    }
})



/***
 *
  description    String
  contact        String
  pricePerSqFeet Int?
  pricePerMonth  Int?
  images         Image[]
 */