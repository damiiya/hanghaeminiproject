import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, error } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <SignForm>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputWrapper>
          <div>
            ID
            <br />
            <input type="text" placeholder="ID를 입력해주세요" />
          </div>
          <div>
            PASSWORD
            <br />
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </div>
          <BtnWrapper>
            <button>Login</button>
            <br />
            <button>SignUp</button>
          </BtnWrapper>
        </InputWrapper>
      </form>
    </SignForm>
  );
}
const SignForm = styled.div`
  position: absolute;
  text-align: center;
  margin: 20px 35% auto;
  width: 30vw;
  height: 40vh;
  border-radius: 10px;
  outline: solid 1px red;
`;
const InputWrapper = styled.div`
  margin: 30% 0 auto;
`;
const BtnWrapper = styled.div`
  margin: 10px;
  padding-top: 20px;
`;
export default SignUp;
