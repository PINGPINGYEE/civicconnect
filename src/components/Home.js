// src/components/Home.js
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Confetti from "react-confetti";

// 애니메이션 정의
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

// 컨테이너 스타일
const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #ff69b4;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

// 풍선 숫자와 하트 컨테이너
const BalloonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  margin-top: 20px;
`;

// 풍선 스타일 (숫자)
const Balloon = styled.div`
  width: 80px;
  height: 100px;
  background: linear-gradient(135deg, #ff8aba, #ff69b4); /* 핑크 계열 풍선 */
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${float} 2s ease-in-out infinite;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

// 하트 텍스트 스타일
const Heart = styled.div`
  font-size: 48px; /* 하트 크기 */
  color: #ff69b4; /* 하트 색상 */
  animation: ${float} 2s ease-in-out infinite;
  animation-delay: 0.6s;
`;

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {/* 빵빠레 효과 */}
      <Confetti width={windowSize.width} height={windowSize.height} />
      <Title>200일 축하해!</Title>
      <Subtitle>그리고 많이 사랑해 💕 한 평생!</Subtitle>

      {/* 풍선 숫자와 하트 */}
      <BalloonsContainer>
        <Balloon>2</Balloon>
        <Balloon>0</Balloon>
        <Balloon>0</Balloon>
        <Heart>❤️</Heart> {/* 하트를 텍스트로 추가 */}
      </BalloonsContainer>
    </Container>
  );
};

export default Home;
