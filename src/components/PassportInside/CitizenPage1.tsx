import { citiesVisited } from "../../data/Cities";


export default function CitizenPage1() {

    const randomIndex = Math.floor(Math.random() * citiesVisited.length)
    const randomCity = citiesVisited[randomIndex]
  return (
    <div className="p-4 py-6 bg-white shadow-md rounded-xl w-full h-80 ">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Citizen Page</h1>
        <p>{randomCity.name}</p>
      </div>
    </div>
  );
}
