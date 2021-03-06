import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { OnLoginUser } from "../redux/modules/post.js";
import { ReactComponent as Logo } from "../logo.svg";
import styled from "styled-components";

const Header = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  // const UserState = useSelector((state) => console.log(state));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(OnLoginUser(localStorage.getItem("UserState")));
  // }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
    //   localStorage.setItem("userState", false);
    //   const userLogin = localStorage.getItem("UserState");
    //   dispatch(OnLoginUser(userLogin));
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <Logo
            style={{ width: "50%", marginLeft: "20px", objectFit: "contain" }}
          />
        </Link>
      </HeaderWrapper>
      <>
        {!token ? (
          <BtnWrapper>
            <Link to="/Login">
              <Btn>Log In</Btn>
            </Link>
            <Link to="/SignUp">
              <Btn>Sign Up</Btn>
            </Link>
          </BtnWrapper>
        ) : (
          <BtnWrapper>
            <Link to="/WritePost">
              <Btn>게시글 작성</Btn>
            </Link>
            <Link to="/">
              <Btn
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </Btn>
            </Link>
          </BtnWrapper>
        )}
      </>
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
