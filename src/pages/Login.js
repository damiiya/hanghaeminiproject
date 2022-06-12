import React, {useRef} from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function SignUp() {
  const {register, handleSubmit, formState: {errors}, watch } = useForm( {mode: onchange} );
  
  // const onSubmit = async data => {
  //   alert(JSON.stringify(data));
  // }
  // axios.post('/user', {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  const password = useRef({});
  password.current = watch("password", "")
  
  const onSubmit = (data) => {
    console.log(data)
    
    
  };
  
      const idErr = (
        (errors.username?.type === "required") ? (<p>ID 쓰셈;</p>) :
        (errors.username?.type === "pattern") ? (<p> ID 형식 안 맞음!</p>) : 
        (errors.username?.type === "maxLength") ? (<p>ID 형식 안 맞음!</p>) : 
        (errors.username?.type === "minLength") ? (<p>ID 형식 안 맞음!</p>) :("")
      );

      

      
      const pwErr = (
        (errors.password?.type === "required") ? (<p>PW 쓰셈;</p>) :
        (errors.password?.type === "minLength") ? (<p>PW 형식 안 맞음!</p>) :
        (errors.password?.type === "pattern") ? (<p>PW 형식 안 맞음!</p>) : 
        (errors.password?.type === "maxLength") ? (<p>PW 형식 안 맞음!</p>) : ("")
      );
      
     

     

  return (
    <div className="signUpPage">       
     
      <form onSubmit={handleSubmit(onSubmit)}>
       
       
       <SignForm> 
        
        

        <InputContainer>

          <InputWrap >
            <label>ID : </label>                                        
            <input type="text" placeholder="ID를 입력해주세요" name="username" 
             {...register('username',{
              required: true, pattern: {value:  /^[a-z]+[a-z0-9]{5,11}$/g }, maxLength: 12, minLength: 6
            })}/><p>{idErr}</p>              
             
          </InputWrap>


          <InputWrap>
            <label>PW : </label>
            <input type="password" placeholder="비밀번호를 입력해주세요" name="password"
            {...register('password',{
              required: true, pattern: { value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/ },minLength: 8, maxLength:16     
            })}/><p>{pwErr}</p> 
          </InputWrap>

        

          <input type="submit" onClick={handleSubmit(onSubmit)}/>
          
        </InputContainer>
        
      </SignForm>
      </form>
      </div>

  )
}




const SignForm = styled.div`
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
  
  
`
//test
const InputWrap = styled.div`
  position: relative;
  height: 10%;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0 10px;
  background-color: #ffc468;
  padding: 20px;
`;
export default SignUp;
