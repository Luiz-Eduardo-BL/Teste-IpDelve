import { useState, useEffect } from "react";
import NavbarWithSearch from "../components/Headers/Navbar";
import { getTravelLocations } from "../environment/rickMortyApi";
import Select from "react-tailwindcss-select";
import { createTravelApi } from "../environment/api";

const TravelPage = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [stops, setStops] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);

  const fetchLocationOptions = async () => {
    try {
      const { data } = await getTravelLocations();
      setLocationOptions(data.results);
    } catch (error) {
      console.error("Erro ao buscar locais de viagem:", error);
    }
  };

  useEffect(() => {
    fetchLocationOptions();
  }, []);

  const handleAddStop = () => {
    setStops([...stops, ""]);
  };

  const handleRemoveStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleSaveTravel = async () => {
    try {
      const stopsIds = await Promise.all(
        stops.map(async (stop) => {
          const { data } = await createTravelApi(stop);
          return data.id;
        })
      );
      const { data } = await createTravelApi({
        startLocation,
        endLocation,
        stops: stopsIds,
      });
      console.log("Viagem criada com sucesso:", data);
    } catch (error) {
      console.error("Erro ao criar viagem:", error);
    }
  }

  return (
    <>
      <NavbarWithSearch />
      <div className="flex justify-center items-center mt-4">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-col space-y-4 text-black">
            <div>
              <Select
                options={locationOptions.map((location) => ({
                  value: location.name,
                  label: location.name,
                }))}
                value={startLocation}
                onChange={(value) => setStartLocation(value)}
                placeholder="Selecione Local de Partida"
              />
            </div>
            <div>
              <Select
                options={locationOptions.map((location) => ({
                  value: location.name,
                  label: location.name,
                }))}
                value={endLocation}
                onChange={(value) => setEndLocation(value)}
                placeholder="Selecione Local de Chegada"
              />
            </div>
            {stops.map((stop, index) => (
              <div key={index} className="flex items-center gap-2">
                <Select
                  options={locationOptions.map((location) => ({
                    value: location.name,
                    label: location.name,
                  }))}
                  value={stop}
                  onChange={(value) => {
                    const newStops = [...stops];
                    newStops[index] = value;
                    setStops(newStops);
                  }}
                  placeholder={`Parada ${index + 1}`}
                />
                <button
                  onClick={() => handleRemoveStop(index)}
                  className="px-6 py-0.5 bg-red-500 text-white rounded"
                >
                  Remover Parada
                </button>
              </div>
            ))}
            <button
              onClick={handleAddStop}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Adicionar Parada
            </button>
            <button
              onClick={handleSaveTravel}
              className="bg-blue-500 text-white rounded"
            >
              Salvar Viagem
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelPage;
