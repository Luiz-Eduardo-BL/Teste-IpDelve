import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

interface Character {
  id: number;
  name: string;
  image: string;
}

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const locationsPerPage = 6;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}`)
      .then((response) => {
        setLocations(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleLocationClick = async (location: Location) => {
    try {
      const residents = await Promise.all(location.residents.map(url => axios.get(url)));
      const characters: Character[] = residents.map(response => response.data);

      setSelectedLocation({
        ...location,
        residents: characters,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderLocations = () => {
    const startIndex = (currentPage - 1) * locationsPerPage;
    const endIndex = startIndex + locationsPerPage;
    const locationsToRender = locations.slice(startIndex, endIndex);

    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          {locationsToRender.map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location)}
              className="w-full h-50 md:h-40 border border-gray-300 rounded-lg p-5 cursor-pointer mx-2"
            >
              <h2 className="text-xl font-semibold mb-2">Location: {location.name}</h2>
              <p>Tipo: {location.type}</p>
              <p>Dimensão: {location.dimension}</p>
            </div>
          ))}
        </div>
      </div>
    );
    
  };

  const renderLocationDetails = () => {
    if (selectedLocation) {
      return (
        <div className="mt-5 w-80%">
          <div className="border border-gray-300 rounded-lg p-5 max-h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-2">Location: {selectedLocation.name}</h2>
            <p>Tipo: {selectedLocation.type}</p>
            <p>Dimensão: {selectedLocation.dimension}</p>
            {selectedLocation.residents.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mt-5 mb-3">Residentes:</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedLocation.residents.map((resident) => (
                    <div key={resident.id} className="border border-gray-300 rounded-lg p-2">
                      <img src={resident.image} alt={resident.name} className="w-full h-32 object-cover" />
                      <p className="text-center mt-2">{resident.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      {renderLocations()}
      <div className="flex justify-center mt-9">
        {[...Array(Math.ceil(locations.length / locationsPerPage))].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-8 py-1 rounded-md ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {renderLocationDetails()}
    </div>
  );
};

export default LocationList;
