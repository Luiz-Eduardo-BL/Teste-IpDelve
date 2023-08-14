import { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import NavbarWithSearch from "../components/Headers/Navbar";

const Dashboard = () => {
  const [pageNumber, updatePageNumber] = useState(1);
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState({
    info: {}, 
    results: [], 
  });
  const [search, setSearch] = useState("");
  const { info, results } = fetchedData;

  const api = `https://rickandmortyapi.com/api/location/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="Dashboard">
      <NavbarWithSearch />
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="flex justify-center items-center mt-4">
        <div className="container mx-auto sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <div className="flex flex-col space-y-4">
                {results.slice(0, 3).map((result) => (
                  <Card key={result.id} page="/" results={[result]} />
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col space-y-4">
                {results.slice(3).map((result) => (
                  <Card key={result.id} page="/" results={[result]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default Dashboard;
