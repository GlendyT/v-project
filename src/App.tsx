import CitizenResult from "./components/CitizenResult";
import Formulario from "./components/Formulario";
import { useCitizenStore } from "./store";

function App() {
  const citizens = useCitizenStore((state) => state.citizens);

  return <>{citizens.length ? <CitizenResult /> : <Formulario />}</>;
}

export default App;
