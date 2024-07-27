import { useCitizenStore } from "../../store";
import { Citizen } from "../../types";
import CitizenDetailItem from "./CitizenDetailItem";
import CitizenPage1 from "./CitizenPage1";
import vid from "../../assets/VID.webp";


type CitizenDetalProps = {
  citizen: Citizen;
};

export default function CitizenDetail({ citizen }: CitizenDetalProps) {
  const deleteCitizen = useCitizenStore((state) => state.deleteCitizen);

  const date: Date = new Date();

  return (
    <> 
    <CitizenPage1/>
      <div className=" py-6 bg-white shadow-md rounded-xl w-full ">
        <p className="uppercase font-extrabold text-xs flex text-center justify-center">
          Republica de army/ republic of army
        </p>
        <div className="flex flex-row-2 gap-4 my-6 mx-10 max-sm:flex-row-2 max-sm:gap-0 max-sm:my-2 max-sm:mx-2">
          <div className="flex items-center justify-center">
            <img src={vid} alt="" className="lg:w-44 md:w-44 sm:w-44" />
          </div>
          <div className="flex flex-row-2 gap-2">
            <div className="grid gap-2">
              <CitizenDetailItem label="Apellidos/Surname" data={"BORAHAE"} />
              <CitizenDetailItem
                label="Nombre/GivenNames"
                data={citizen.name}
              />
              <CitizenDetailItem
                label="Nacionalidad/Nacionality"
                data={"ARMY"}
              />
              <CitizenDetailItem
                label="FechadeNacimiento/DateOfBirth"
                data={"13/06/2013"}
              />
              <CitizenDetailItem
                label="LugarDeNacimiento/PlaceOfBirth"
                data={"KOREA"}
              />
            </div>
            <div className=" space-y-2 ">
              <CitizenDetailItem
                label="No.DePasaporte/PassportNumber"
                data={"THV31121995"}
              />
              <CitizenDetailItem
                label="FechaDeEmisión/DateofIssue"
                data={date.toLocaleString()}
              />
              <CitizenDetailItem
                label="TipoVisa/VisaType"
                data={"PERMANENTE"}
              />
            </div>
          </div>
        </div>
        <p className="text-xs uppercase text-center justify-center">
          {citizen.id}
        </p>
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
