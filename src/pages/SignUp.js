import React from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";



function SignUp() {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    
      
      <form onSubmit={handleSubmit(onSubmit,onError)}>
       <SignForm> 
        

        <InputContainer>

          <InputWrap style={{justifyContent:"spaceBetween"}}>ID<button>중복확인</button><br/><input type="text" placeholder="ID를 입력해주세요" {...register("useasdfrname",{
            minLength: {
              value:5,
              message: "ID는 최소 5글자 이상입니다"
            }
          })}/><br/></InputWrap>
          <InputWrap>PW<br/><input type="text" placeholder="비밀번호를 입력해주세요" /></InputWrap>
          <InputWrap>CONFIRM PW<br/><input type="text" placeholder="비밀번호를 입력해주세요"/></InputWrap>
          <InputWrap>NICKNAME<br/><input type="text" placeholder="닉네임을 입력해주세요"/></InputWrap>
          <input type="submit" />
        </InputContainer>
              
      </SignForm>
      </form>
    
  )
}


const SignForm = styled.div`
  display: flex;
  justify-content: center;  
  align-items:center;
  text-align: center;

  margin: 20px 35% 20px 35%;
  width: 30vw;
  height: 50vh;
  
  border-radius: 10px;
  padding: 10px;
  
  font-family: "S-CoreDream-8Heavy";

  box-shadow: 10px 10px 10px #fafafa;

  
  background-color: #EC994B;
  object-fit: contain;
  
  
  /* background-size: contain; */
  /* background-position: cover; */
  border: solid 1px #331621;
  
`

const InputContainer = styled.div`
  width: 20vw;
  height: 100%;
  margin: 20px 10% auto;
  flex-direction: column;
  margin: auto;
  
  
`
//test
const InputWrap = styled.div`
  height: 10%;
  align-items:center;
  border-radius: 10px;
  margin: 5% 0 10px;
  background-color: #FFC468;
  padding: 20px;
`
export default SignUp;