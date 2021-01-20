import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  grid-row-end: span ${(props) => props.spans};
`;

const ImageCard = ({ image: { description, urls } }) => {
  const cardRef = useRef(null);
  const [spans, setSpans] = useState(0);
    
  const calculateSpans = () => {
    const height = cardRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    setSpans(spans);
  };

  useEffect(() => {
    cardRef.current.addEventListener("load", calculateSpans);
  }, []);

  return <Image ref={cardRef} alt={description} src={urls.regular} spans={spans}/>;
};

export default ImageCard;
