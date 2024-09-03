import { useState } from "react";
import { useCitizenStore } from "../../store";
import { Citizen } from "../../types";

type CitizenDetalProps = {
  citizen: Citizen;
  handleDownloadImage: () => void;
};

export const ButtonCitizen = ({
  citizen,
  handleDownloadImage,
}: CitizenDetalProps) => {
  const deleteCitizen = useCitizenStore((state) => state.deleteCitizen);

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleDownload = () => {
    setButtonDisabled(true)
    handleDownloadImage()
  }

  return (
    <>
      <button
        type="button"
        className="py-2 px-10 bg-black hover:bg-greenButton hover:text-black text-white font-bold uppercase rounded-lg"
        onClick={() => deleteCitizen(citizen.id)}
      >
        Restart
      </button>
      <button
        type="button"
        className={`py-2 px-10 bg-black hover:bg-blueButton hover:text-black text-white font-bold uppercase rounded-lg disabled:bg-blueButton disabled:text-black disabled:cursor-not-allowed`}
        onClick={() => handleDownload()}
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "Downloaded" : "Share"}
      </button>
    </>
  );
};
