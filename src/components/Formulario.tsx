import { useForm } from "react-hook-form";
import Error from "./Error";
import { DraftCitizen } from "../types";
import { useCitizenStore } from "../store";

export default function Formulario() {
  const  addCitizen  = useCitizenStore(state => state.addCitizen)
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<DraftCitizen>();

  const registerCitizen = (data: DraftCitizen) => {
    addCitizen(data);

    reset()
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <p className="text-lg mt-5 text-center mb-10">
        Generate Your {""}
        <span className="text-black font-bold">PASSPORT</span>
      </p>

      <form
        className=""
        noValidate
        onSubmit={handleSubmit(registerCitizen)}
      >
        <div className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          <label htmlFor="name" className="text-sm uppercase font-bold flex justify-center">
            PASSPORT
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
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
          className="bg-black w-full p-3 text-white uppercase font-bold hover:bg-gray-800 cursor-pointer transition-colors"
          value="GENERATE"
        />
      </form>
    </div>
  );
}
