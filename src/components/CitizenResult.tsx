import { useCitizenStore } from "../store";
import CitizenDetail from "./PassportInside/CitizenDetail";

export default function CitizenResult() {
  const citizens = useCitizenStore((state) => state.citizens);

  return (
    <>
      <div className=" md:w-4/2 lg:w-3/5 2xl:w-2/5 mx-5">
        {citizens.map((citizen) => (
          <CitizenDetail citizen={citizen} key={citizen.id} />
        ))}
      </div>
    </>
  );
}
