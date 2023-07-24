import axios from "axios";

const token = "Bearer " + localStorage.getItem("token");

const defaultHeader = {
  accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
};

const apiUrl = "https://rickandmortyapi.com/api";

export const getTravelLocations = async () => {
  const response = await axios.get(`${apiUrl}/location`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelLocation = async (id: string) => {
  const response = await axios.get(`${apiUrl}/location/${id}`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelCharacters = async () => {
  const response = await axios.get(`${apiUrl}/character`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelCharacter = async (id: string) => {
  const response = await axios.get(`${apiUrl}/character/${id}`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelEpisodes = async () => {
  const response = await axios.get(`${apiUrl}/episode`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelEpisode = async (id: string) => {
  const response = await axios.get(`${apiUrl}/episode/${id}`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelLocationsByPage = async (page: number) => {
  const response = await axios.get(`${apiUrl}/location?page=${page}`, {
    headers: defaultHeader,
  });
  return response;
}

export const getTravelCharactersByPage = async (page: number) => {
  const response = await axios.get(`${apiUrl}/character?page=${page}`, {
    headers: defaultHeader,
  });
  return response;
}
