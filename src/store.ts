import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Citizen, DraftCitizen } from "./types";

type CitizenState = {
  citizens: Citizen[];
  addCitizen: (data: DraftCitizen) => void;
  deleteCitizen: (id: Citizen["id"]) => void;
};

const createCitizen = (citizen: DraftCitizen): Citizen => {
  return { ...citizen, id: uuidv4() };
};

export const useCitizenStore = create<CitizenState>()(
  devtools(
    persist((set) => ({
    citizens: [],
    addCitizen: (data) => {
      const newCitizen = createCitizen(data);
      set((state) => ({
        citizens: [...state.citizens, newCitizen],
      }));
    },
    deleteCitizen: (id) => {
      set((state) => ({
        citizens: state.citizens.filter((citizen) => citizen.id !== id),
      }));
    },
  }),{
    name: "citizen-store",
  })
)
);
