import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = (listing) => {
  // http protocol each request has a special header called content type
  // json object => application/json
  // files or images => multipart/form-data
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return apiClient.post(endpoint, data, {
    onUploadProgress: (progress) =>
      console.log(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
