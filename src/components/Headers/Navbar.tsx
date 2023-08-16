import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import Logout from "../Login/Logout";
import { Link } from "react-router-dom"; 

export default function NavbarWithSearch() {
  return (
    <Navbar color="blue-gray">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/dashboard">
            <Typography
              color="white"
              ripple="light"
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Rick and Morty
            </Typography>
          </Link>
          <Link to="/history"> 
            <Button
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Historico
            </Button>
          </Link>
          <Link to="/travel">
            <Button
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Viagens
            </Button>
          </Link>
          <div className="flex justify-center mt-2 mb-2">
            <Logout />
          </div>
        </div>
      </div>
    </Navbar>
  );
}
