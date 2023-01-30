import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";

export default axios.create({ baseURL });
