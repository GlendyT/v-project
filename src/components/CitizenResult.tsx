
import { useDownload } from "../hooks/useDownload";
import { useCitizenStore } from "../store";
import { ButtonCitizen } from "./PassportInside/ButtonCitizen";
import CitizenDetail from "./PassportInside/CitizenDetail";

export default function CitizenResult() {
  const citizens = useCitizenStore((state) => state.citizens);
  const { handleDownloadImage } = useDownload();

  return (
    <>
      <div className="min-h-screen bg-largeScreen2 bg-center bg-no-repeat bg-cover max-sm:bg-smallScreen">
        <div className="flex items-center justify-center py-24">
          <div className="flex flex-row bg-transparent" id="print">
            {citizens.map((citizen) => (
              <CitizenDetail citizen={citizen} key={citizen.id}  />
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center justify-center">
          {citizens.map((citizen) => (
            <ButtonCitizen citizen={citizen} key={citizen.id}  handleDownloadImage={handleDownloadImage} />
          ))}
        </div>
      </div>
    </>
  );
}
