import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <Logo
            style={{ width: "50%", marginLeft: "20px", objectFit: "contain" }}
          />
        </Link>
      </HeaderWrapper>
      <BtnWrapper>
        <Link to="/Login">
          <Btn>Log In</Btn>
        </Link>
        <Link to="/SignUp">
          <Btn>Sign Up</Btn>
        </Link>
      </BtnWrapper>
      {/* if 로그인 하면 아래 뷰로 바꿔주기 */}
      {/* <BtnWrapper>
        <Link to="/Login">
          <Btn>게시글 작성</Btn>
        </Link>
        <Link to="/SignUp">
          <Btn>Log out</Btn>
        </Link>
      </BtnWrapper> */}
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
  background-color: #f5894c;
  border-bottom: 3px solid black;
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
  margin-right: 30px;
`;

const Btn = styled.button`
  font-size: 20px;
  font-weight: bold;
  font-family: "S-CoreDream-8Heavy";
  margin: 0 10px;
  padding: 10px 20px;
  border: 3px solid black;
  border-radius: 40px 40px 0 0;
  width: 150px;
`;

export default Header;
