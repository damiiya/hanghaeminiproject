import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { OnLoginUser } from "../redux/modules/post.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useForm 구조분해할당으로 사용방법 지정
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: onchange });

  const username = useRef();
  username.current = watch("username", "");
  const password = useRef();
  password.current = watch("password", "");

  // 요청
  const onSubmit = async () => {
    const userLoginData = {
      username: username.current,
      password: password.current,
    };
    await axios
      .post("http://3.34.188.26/user/login", userLoginData)
      .then(function (response) {
        localStorage.setItem("access_token", response.headers.authorization);
        localStorage.setItem("userLogin", true);
        const UserState = localStorage.getItem("UserLogin");
        dispatch(OnLoginUser(UserState));
        alert("success");
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert("error");
      });
  };

  // 에러 메세지
  const idErr =
    errors.username?.type === "required" ? <p>ID를 입력해주세요.</p> : "";
  const pwErr =
    errors.password?.type === "required" ? <p>PW를 입력해주세요</p> : "";

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginForm>
          <InputContainer>
            <InputWrap>
              <label>ID : </label>
              <br />
              <input
                type="text"
                placeholder="ID를 입력해주세요"
                name="username"
                {...register("username", {
                  required: true,
                  pattern: { value: /^[a-z]+[a-z0-9]{5,11}$/g },
                  maxLength: 12,
                  minLength: 6,
                })}
              />
              <p>{idErr}</p>
            </InputWrap>
            <InputWrap>
              <label>PW : </label>
              <br />
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                name="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
                  },
                  minLength: 8,
                  maxLength: 16,
                })}
              />
              <p>{pwErr}</p>
            </InputWrap>
            <input type="submit" onClick={handleSubmit(onSubmit)} />
          </InputContainer>
        </LoginForm>
      </form>
    </div>
  );
};

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 35% 20px 35%;
  width: 30vw;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  font-family: "S-CoreDream-8Heavy";
  box-shadow: 10px 10px 10px #fafafa;
  background-color: #ec994b;
  object-fit: contain;
  /* background-size: contain; */
  /* background-position: cover; */
  border: solid 1px #331621;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 20px 10% auto;
  flex-direction: column;
  margin: auto;
`;

const InputWrap = styled.div`
  position: relative;
  height: 10%;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0 10px;
  background-color: #ffc468;
  padding: 20px;
`;

export default Login;
