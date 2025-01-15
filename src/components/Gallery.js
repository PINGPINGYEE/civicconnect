// src/components/Gallery.js
import React from "react";
import styled from "styled-components";

// 45개의 이미지 경로 배열 생성
const images = Array.from({ length: 45 }, (_, i) => `/images/i${i + 1}.jpg`);

// 스타일 정의
const GalleryContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  width: calc(33.333% - 10px); /* 한 줄에 3개씩 */
  aspect-ratio: 1; /* 정사각형 유지 */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1); /* 이미지 확대 효과 */
  }
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      {images.map((src, index) => (
        <ImageWrapper key={index}>
          <StyledImage src={src} alt={`이미지 ${index + 1}`} />
        </ImageWrapper>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
