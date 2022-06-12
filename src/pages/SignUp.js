import React, {useRef} from "react";
import styled from "styled-components";
import {useForm} from "react-hook-form";



function SignUp() {
  const {register, handleSubmit, formState: {errors}, watch } = useForm( {mode: onchange} );
  
  // const onSubmit = async data => {
  //   alert(JSON.stringify(data));
  // }

  const password = useRef({});
  password.current = watch("password", "")
  
  const onSubmit = (data) => {
    console.log(data)
    
    
  };
  
      const idErr = (
        (errors.username?.type === "required") ? (<p>ID는 필수</p>) :
        (errors.username?.type === "pattern") ? (<p> ID는 형식 확인.</p>) : ("")
      );

      const nickErr = (
        (errors.nickname?.type === "required") ? (<p>NICKNAME은 필수</p>) :
        (errors.nickname?.type === "minLength") ? (<p>NICKNAME은 2글자 이상</p>) :
        (errors.nickname?.type === "maxLength") ? (<p>NICKNAME은 10글자 이하</p>) : ("")
      );
      
      const pwErr = (
        (errors.password?.type === "required") ? (<p>PW는 필수</p>) :
        (errors.password?.type === "pattern") ? (<p>PW 형식확인</p>) : ("")
      );
      
      const confirmErr = (
        (errors.confirm?.type === "required") ? (<p>CONFIRM은 필수</p>) :
        (errors.confirm?.type === "pattern") ? (<p>PW 불일치</p>) : ("")
      );
      

     

  return (
    <div className="signUpPage">       
      <ErrorPlot>
      {idErr}
      {pwErr}
      {confirmErr}
      {nickErr}
      
      </ErrorPlot>
      <form onSubmit={handleSubmit(onSubmit)}>
       
       
       <SignForm> 
        
        

        <InputContainer>

          <InputWrap >
            <label>ID : 소문자로 시작, 대문자는 입력X, <br/>숫자 사용 가능, 길이는 6~12자</label> <br/>                                        
            <input type="text" placeholder="ID를 입력해주세요" name="username" 
             {...register('username',{
              required: true, pattern: {value:  /^[a-z]+[a-z0-9]{5,11}$/g }
            })}/><br/>              
              <button>중복체크</button>
          </InputWrap>


          <InputWrap>
            <label>PW : 영문자, 숫자, 특수문자가 각각 포함,<br/>8~16자</label><br/>
            <input type="password" placeholder="비밀번호를 입력해주세요" name="password"
            {...register('password',{
              required: true, pattern: { value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/ }     
            })}/>
          </InputWrap>

          <InputWrap>
            <label>CONFIRM PW: 패스워드 재입력</label><br/>
            <input type="password" placeholder="비밀번호를 재입력해주세요" name="confirm"
            {...register('confirm',{
              required: true, validate: value => value === password.current || "not match"
            })}/>
          </InputWrap>
          
          <InputWrap>
            <label>NICKNAME: 모든 문자 형식 가능, <br/>2~10글자</label><br/>
            <input type="text" placeholder="닉네임을 입력해주세요" name="nickname"
            {...register('nickname',{
              required: true, minLength:2, maxLength:10
            })}/>
          </InputWrap>

          <input type="submit" onClick={handleSubmit(onSubmit)}/>
          
        </InputContainer>
        
      </SignForm>
      </form>
      </div>

  )
}

const ErrorPlot = styled.div`
 width: 30vw;
 height: 30vh;
 border: solid 1px red;
 position: absolute;
`


const SignForm = styled.div`
  display: flex;
  justify-content: center;  
  align-items:center;
  text-align: center;

  margin: 20px 35% 20px 35%;
  width: 30vw;
  height: 100%;
  
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
  position: relative;
  
  margin: 20px 10% auto;
  flex-direction: column;
  margin: auto;
  
  
`
//test
const InputWrap = styled.div`
  position: relative;
  height: 10%;
  align-items:center;
  border-radius: 10px;
  margin: 5% 0 10px;
  background-color: #FFC468;
  padding: 20px;
`
export default SignUp;