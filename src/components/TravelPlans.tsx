// contem os seguintes campos, partida, paradas e chegada onde elas consultam as locations de rickMortyApi.ts e mostra as opçoes usando o react-select

import { useState } from 'react';
import Select from 'react-select';
import { getTravelLocations } from '../environment/rickMortyApi';

interface TravelPlan {
  departure: string;
  stops: string[];
  arrival: string;
}

const TravelPlans: React.FC = () => {

  const [travelPlan, setTravelPlan] = useState<TravelPlan>({
    departure: '',
    stops: [],
    arrival: '',
  });

  const [locations, setLocations] = useState<string[]>([]);

  const handleDepartureChange = (option: any) => {
    setTravelPlan({
      ...travelPlan,
      departure: option.value,
    });
  };

  const handleStopsChange = (options: any) => {
    setTravelPlan({
      ...travelPlan,
      stops: options.map((option: any) => option.value),
    });
  };

  const handleArrivalChange = (option: any) => {
    setTravelPlan({
      ...travelPlan,
      arrival: option.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(JSON.stringify(travelPlan));
  };

  const handleSearch = async (inputValue: string) => {
    const locations = await getTravelLocations(inputValue);
    setLocations(locations);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Travel Plans</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-row">
          <Select
            className="w-64"
            placeholder="Saida"
            options={locations}
            onInputChange={handleSearch}
            onChange={handleDepartureChange}
          />
          <Select
            className="w-64"
            placeholder="Parada"
            options={locations}
            onInputChange={handleSearch}
            onChange={handleStopsChange}
            isMulti
          />
          <Select
            className="w-64"
            placeholder="Chegada"
            options={locations}
            onInputChange={handleSearch}
            onChange={handleArrivalChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TravelPlans;