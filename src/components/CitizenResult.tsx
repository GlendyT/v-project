import { useCitizenStore } from "../store";
import CitizenDetail from "./CitizenDetail";

export default function CitizenResult() {
  const citizens = useCitizenStore((state) => state.citizens);

  return <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h1>Here is Your Passport</h1>
    {citizens.map( citizen => (
        <CitizenDetail citizen={citizen} key={citizen.id}/>
    ))}
  </div>;
}
