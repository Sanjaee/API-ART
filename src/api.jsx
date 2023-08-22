import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID zVnPGvp5MM_vuX0NtRbCSI8HvGmW8GFiDjo7wK-iyEI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
