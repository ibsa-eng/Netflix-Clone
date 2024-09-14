import axios from "axios";

const API_KEY = "a6493e24cc1bfef58c4dad2d0ea11507"; // Replace with your actual TMDB API key

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY, // Add the API key to the request parameters
  },
});

instance
  .get("/movie/top_rated")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default instance;
