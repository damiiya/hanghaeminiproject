import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo
          style={{ width: "40%", marginLeft: "10px", objectFit: "contain" }}
        />
      </HeaderWrapper>
      <BtnWrapper>
        <Link to="/Login">
          <Btn>Log In</Btn>
        </Link>
        <Link to="/SignUp">
          <Btn>Sign Up</Btn>
        </Link>
      </BtnWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 100;
  width: 100vw;
  background-color: #F5894C;
  //background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
`;

const Btn = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: "S-CoreDream-8Heavy";
  margin: 0 10px;
`;

export default Header;
