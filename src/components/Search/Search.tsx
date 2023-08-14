import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Search = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <form onSubmit={searchBtn} className="relative flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-black focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          color="blue"
          buttonType="filled"
          rounded={true}
          iconOnly={false}
          ripple="light"
          className="border-0"
          onClick={searchBtn}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
