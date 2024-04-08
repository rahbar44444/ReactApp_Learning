import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "729fcc23f0354651b2d924dc025448f5",
  },
});
