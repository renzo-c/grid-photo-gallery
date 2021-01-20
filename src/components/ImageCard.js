import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
  grid-row-end: span ${(props) => props.spans};
`;

const ImageCard = ({ image: { description, urls } }) => {
  const cardRef = useRef(null);
  const [spans, setSpans] = useState(0);
    
  const calculateSpans = () => {
    const height = cardRef.current.clientHeight;
    // how many spans of 5px are going to be needed for that image height
    const spans = Math.ceil(height / 5) + 1;

    setSpans(spans);
  };

  useEffect(() => {
    cardRef.current.addEventListener("load", calculateSpans);
    window.addEventListener("resize", calculateSpans);
  }, []);

  return <Image ref={cardRef} alt={description} src={urls.regular} spans={spans}/>;
};

export default ImageCard;
