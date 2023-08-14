import React from "react";
import { Link } from "react-router-dom";
import CardDetails from "./CardDetails";

const Card = ({ page, results }: any) => {

  let display;

  if (results.length === 0) {
    display = <h1 className="text-center">No results found</h1>;
  } else {
    display = results.map((x: { id: any; image: any; name: any; status: any; location: any; }) => {
      const {
        id,
        image,
        name,
        status,
        location
      } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          className="lg:w-1/3 pr-4 pl-4 w-full"
          key={id}
        >
          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-8 border-gray-300 mb-3">
            <div className="flex-auto p-6">
              <div className="flex justify-center">
                <img
                  src={image}
                  alt={name}
                  className="max-w-full h-auto"
                />
              </div>
              <h5 className="mb-3 text-center">{name}</h5>
              <p className="mb-0 text-center">
                <span className="fw-bold">Status: </span>
                {status === "Dead" ? (
                  <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-red-600 text-white">
                    {status}
                  </span>
                ) : status === "Alive" ? (
                  <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-green-500 text-white">
                    {status}
                  </span>
                ) : (
                  <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-gray-600 text-white">
                    {status}
                  </span>
                )}
              </p>
              <p className="mb-0 text-center">
                <span className="fw-bold">Location: </span>
                {location?.name}
              </p>
            </div>
          </div>
        </Link>

      );
    })
  }

  return (
    <>
    {display}
    </>
  );
}

export default Card;