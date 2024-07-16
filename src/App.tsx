import CitizenResult from "./components/CitizenResult";
import Formulario from "./components/Formulario";
import { useCitizenStore } from "./store";

function App() {
  const citizens = useCitizenStore((state) => state.citizens);

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          <span className="text-black">VPROJECT</span>
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center">
          {citizens.length ? <CitizenResult /> : <Formulario />}
        </div>
      </div>
    </>
  );
}

export default App;
