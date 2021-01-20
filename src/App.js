import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

import unsplash from "./api/unsplash";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
`;

const App = () => {
  const [images, setImages] = useState([]);
  
  const handleSubmit = (term) => {
    unsplash
      .get("/search/photos", {
        params: {
          query: term,
        },
      })
      .then((res) => setImages(res.data.results));
  };

  return (
    <Container>
      <SearchBar handleSubmit={handleSubmit} />
      Found: {images.length} images
      <ImageList images={images} />
    </Container>
  );
};

export default App;
