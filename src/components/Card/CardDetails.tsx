import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTravelLocation, getTravelLocations } from "../../environment/rickMortyApi";

const CardDetails = () => {
  
  const { id } = useParams();

  const [fetchedData, updateFetchedData] = useState< any >([]);
  const {
    name,
    location,
    origin,
    gender,
    image,
    status,
    species
  } = fetchedData;

  useEffect(() => {
    (async function () {

      if (!id) {
        return;
      }

      try {
        const response = await getTravelLocation(id);
        const data = response.data;
        updateFetchedData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <div className="container mx-auto sm:px-4 flex justify-center mb-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="max-w-full h-auto" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-red-600 fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-green-500 fs-5">{status}</div>;
          } else {
            return <div className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-gray-600 fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails;