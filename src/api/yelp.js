import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 23VrKG4YttnfVNSI6DvBoELa4a-btkQ3t7Ne0u6J8NUMwbUtyQLOja-RjRYr3F9xP6hIBJhFCGiFk6JcsxxHIRLzvFIVgbgPh4uqWfyX9OL0HPcvxN7DA54iJzSTYXYx",
  },
});
