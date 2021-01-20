import React from 'react';
import styled from 'styled-components';

import ImageCard from './ImageCard';

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0 10px;
    grid-auto-rows: 10px;
`;

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    });
    return <ImageContainer>{images}</ImageContainer>
};

export default ImageList;