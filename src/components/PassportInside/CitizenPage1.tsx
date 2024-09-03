import { Cities } from "../../types";

type CitizenDetalProps = {
  randomCity: Cities
};


export default function CitizenPage1({ randomCity }:CitizenDetalProps) {
  return (
    <div className=" shadow-md rounded-xl w-full h-50 ">
      <img src={randomCity.image} />
    </div>
  );
}
