import { useState, useEffect } from "react";
import NavbarWithSearch from "../components/Headers/Navbar";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import { getTravelLocations } from "../environment/rickMortyApi";

const TravelPage = () => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [stops, setStops] = useState([""]);
  const [locationOptions, setLocationOptions] = useState([]);

  const fetchLocationOptions = async () => {
    try {
      const { data } = await getTravelLocations();
      setLocationOptions(data.results);
    } catch (error) {
      console.error("Error fetching travel locations:", error);
    }
  };

  useEffect(() => {
    fetchLocationOptions();
  }, []);

  const handleAddStop = () => {
    setStops([...stops, ""]);
  };

  const handleRemoveStop = (index) => {
    const newStops = [...stops];
    newStops.splice(index, 1);
    setStops(newStops);
  };

  return (
    <div>
      <NavbarWithSearch />

      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">Travel Page</h1>

        <div className="mb-8">
          <Select
            id="startLocation"
            labelText="Start Location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
          >
            <Option value="">Select an option</Option>
            {locationOptions.map((option) => (
              <Option key={option.id} value={option.name}>
                {option.name}
              </Option>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <Select
            id="endLocation"
            labelText="End Location"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
          >
            <Option value="">Select an option</Option>
            {locationOptions.map((option) => (
              <Option key={option.id} value={option.name}>
                {option.name}
              </Option>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <label htmlFor="stops" className="block font-medium mb-1">
            Stops
          </label>
          {stops.map((stop, index) => (
            <div key={index} className="flex items-center mb-6">
              <Input
                type="text"
                placeholder={`Stop ${index + 1}`}
                value={stop}
                onChange={(e) => {
                  const newStops = [...stops];
                  newStops[index] = e.target.value;
                  setStops(newStops);
                }}
                className="mr-6"
              />
              <Button
                color="red"
                buttonType="link"
                size="regular"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                onClick={() => handleRemoveStop(index)}
              >
                X
              </Button>
            </div>
          ))}
          <Button
            color="blue"
            buttonType="link"
            size="regular"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            onClick={handleAddStop}
          >
            + Add Stop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
