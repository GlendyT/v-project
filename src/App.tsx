import CitizenResult from "./components/CitizenResult";
import Formulario from "./components/Formulario";
import { useCitizenStore } from "./store";

function App() {
  const citizens = useCitizenStore((state) => state.citizens);

  return (
    <>
      <div className=" mx-auto my-2 max-sm:mt-2 ">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          <p className="text-black max-sm:text-sm">VPROJECT</p>
        </h1>
        <div className=" mt-2 flex flex-col items-center justify-center max-sm:mt-2">
          {citizens.length ? <CitizenResult /> : <Formulario />}
        </div>
      </div>
    </>
  );
}

export default App;
