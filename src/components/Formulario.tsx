import { useForm } from "react-hook-form";
import Error from "./Error";
import { DraftCitizen } from "../types";
import { useCitizenStore } from "../store";

export default function Formulario() {
  const addCitizen = useCitizenStore((state) => state.addCitizen);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DraftCitizen>();

  const registerCitizen = (data: DraftCitizen) => {
    addCitizen(data);

    reset();
  };
  return (
    <div className=" min-h-screen bg-largeScreen bg-cover bg-no-repeat max-sm:bg-smallScreen2 flex items-center justify-center ">
      <form
        className="backdrop-blur-xl bg-black/50 rounded-xl p-4 flex flex-col gap-4 sm:justify-center items-center text-white max-sm:text-xs"
        noValidate
        onSubmit={handleSubmit(registerCitizen)}
      >
        <div className="">
          <label
            htmlFor="name"
            className="text-sm text-black hover:text-white uppercase font-bold flex justify-center pb-4"
          >
           GET YOUR PASSPORT
          </label>
          <input
            id="name"
            className="w-full p-3 text-black  border border-gray-100 rounded-md"
            type="text"
            placeholder="YOUR NAME"
            {...register("name", {
              required: "Your Name Is Required",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-blue-950 w-full p-3 text-white uppercase font-bold hover:bg-purpleButton cursor-pointer transition-colors rounded-md"
          value="GENERATE"
        />
      </form>
    </div>
  );
}
