import { useCitizenStore } from "../store";
import { Citizen } from "../types";
import CitizenDetailItem from "./CitizenDetailItem";

type CitizenDetalProps = {
  citizen: Citizen;
};

export default function CitizenDetail({ citizen }: CitizenDetalProps) {

    const deleteCitizen = useCitizenStore((state) => state.deleteCitizen)
  return (
    <>
      <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <CitizenDetailItem label="ID" data={citizen.id} />
        <CitizenDetailItem label="Name" data={citizen.name} />
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-black hover:bg-slate-600 text-white font-bold uppercase rounded-lg"
          onClick={() => deleteCitizen(citizen.id)}
        >
          Restart
        </button>
      </div>
    </>
  );
}
