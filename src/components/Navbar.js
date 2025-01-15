// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  background: #ffc0cb;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const Spacer = styled.div`
  height: 60px; /* 네비게이션과 컨텐츠 사이의 공백 */
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/gallery">갤러리</NavLink>
        <NavLink to="/letter">편지</NavLink>
      </Nav>
      <Spacer /> {/* 네비게이션 아래 공백 추가 */}
    </>
  );
};

export default Navbar;
