import React, {useRef} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const {register, handleSubmit, formState: {errors}, watch } = useForm( {mode: onchange} );
  
  // const navigate = React.usenavigate(); 

    

  const username = useRef();
  username.current = watch("username", "")
  

  const password = useRef();
  password.current = watch("password", "")
  

  const passwordCheck = useRef();
  passwordCheck.current = watch("passwordCheck", "")
  

  const nickname = useRef();
  nickname.current = watch("nickname", "")

  const email = useRef();
  email.current = watch("email","")

  const [idCheck,setIdCheck] = React.useState(false);

  
    
  
  
  const IDduplicate = () => {

    const exID = {"username":username.current};
    // console.log(postID)
    
    const sendID = axios.post('http://3.34.188.26/user/signup/duplicate', {
    exID
    })
    .then(function(response){
      alert("사용가능!")
      console.log(response + 'dupli success')
      setIdCheck(true);
    }) 
    .catch(function(error){
      console.log(error + 'dupli fail')
      setIdCheck(false);
    })
  };

  // const onSubmit = async data => {
  //   alert(JSON.stringify(data));
  // }

  const onSubmit = async (data) => {

  
 
  const sendUserData = await axios.post('http://3.34.188.26/user/signup', {
    ...data
  })
  .then(function (response) {
    alert("success")
    // navigate('/');
    console.log(response + 'sign success');
  })
  .catch(function (error) {
    console.log(error + 'sign fail');
  })
};
  
  // console.log(sendUserData);
  
  
  
  // const onSubmit = (data) => {
  //   const copy = [...data];
    
  //   copy =  {
  //     username: data.username.current,
  //     password: data.password.current,
  //     confirm: data.confirm.current,
  //     nickname: data.nickname.current
  //   };
    
  //   console.log(copy);
    
    
  
  
      const idErr = (
        (errors.username?.type === "required") ? (<p>ID는 필수</p>) :
        (errors.username?.type === "pattern") ? (<p> ID는 형식 확인.</p>) : 
        (errors.username?.type === "maxLength") ? (<p>ID 너무 김!</p>) : 
        (errors.username?.type === "minLength") ? (<p>ID 너무 짧음!</p>) :("")
      );

      

      const nickErr = (
        (errors.nickname?.type === "required") ? (<p>NICKNAME은 필수</p>) :
        (errors.nickname?.type === "minLength") ? (<p>NICKNAME은 2글자 이상</p>) :
        (errors.nickname?.type === "maxLength") ? (<p>NICKNAME은 10글자 이하</p>) : ("")
      );
      
      const pwErr = (
        (errors.password?.type === "required") ? (<p>PW는 필수</p>) :
        (errors.password?.type === "minLength") ? (<p>PW 너무 짧음!</p>) :
        (errors.password?.type === "pattern") ? (<p>형식이 올바르지 않음!</p>) : 
        (errors.password?.type === "maxLength") ? (<p>PW 너무 길다!!</p>) : ("")
      );
      
      const confirmErr = (
        (errors.passwordCheck?.type === "required") ? (<p>CONFIRM은 필수</p>) :
        (errors.passwordCheck?.type === "validate") ? (<p>PW 불일치</p>) : ("")
      );
      
        console.log(idCheck);
     

  return (
    <div className="signUpPage">       
      <ErrorPlot>
      
      {pwErr}
      {confirmErr}
      {nickErr}
      
      </ErrorPlot>
      <form onSubmit={handleSubmit(onSubmit)}>
       
       
       <SignForm> 
        
        

        <InputContainer>

          <InputWrap >
            <label>ID : 소문자로 시작, 대문자는 입력X, <br/>숫자 사용 가능, 길이는 6~12자</label>
            <PTag>{idErr}</PTag><br/>                                        
            <input type="text" placeholder="ID를 입력해주세요" name="username"
             {...register('username',{
              required: true, pattern: {value:  /^[a-z][a-z0-9]{5,11}$/g }, maxLength: 12, minLength: 6
            })}/><br/>              
              <button type="button" onClick={IDduplicate} disabled={idCheck} name="idBtn">중복체크</button>
          </InputWrap>


          <InputWrap>
            <label>PW : 영문자, 숫자, 특수문자가 각각 포함,<br/>8~16자</label><br/>
            <input type="password" placeholder="비밀번호를 입력해주세요" name="password"
            {...register('password',{
              required: true, pattern: { value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/ },minLength: 8, maxLength:16     
            })}/>
          </InputWrap>

          <InputWrap>
            <label>CONFIRM PW: 패스워드 재입력</label><br/>
            <input type="password" placeholder="비밀번호를 재입력해주세요" name="passwordCheck"
            {...register('passwordCheck',{
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

          <InputWrap>
            <label>E-Mail : 형식에 맞춰 작성<br/></label><br/>
            <input type="text" placeholder="E-mail을 입력해주세요" name="email"
            {...register('email',{
              required: true, pattern: { value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/ }     
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

const PTag = styled.div`
  
  border: 1px solid black;
  margin: 20px 0 0 0;
  height:15px;
  font-size: 10px;
  
`


const SignForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 20px 35% 20px 35%;
  width: 35vw;
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
  
  
`
//test
const InputWrap = styled.div`
  position: relative;
  
  align-items: center;
  border-radius: 10px;
  margin: 5px 0 10px;
  background-color: #ffc468;
  padding: 20px;
`;
export default SignUp;
