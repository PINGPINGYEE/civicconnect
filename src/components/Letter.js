// src/components/Letter.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 70px;
  padding: 20px;
`;

const LetterContent = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #555;
`;

const Letter = () => {
  return (
    <Container>
      <h2>💌 나의 편지</h2>
      <LetterContent>
        200일동안 많이 싸우고 다퉜지만은 그래도 사랑해.
        앞으로도 쭉 우리 행복하게 지내자. <br></br>평생 가는거야!
        진짜 많이 사랑해. 편지는 별첨 할게! 💕
      </LetterContent>
    </Container>
  );
};

export default Letter;
