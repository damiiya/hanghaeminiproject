// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeHeart } from "../redux/modules/post.js";
// import Avatar from "@mui/material/Avatar";
// import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { ReactComponent as PostButton } from "../postbutton.png";

// const Post = () => {
//   // const dispatch = useDispatch();
//   let dispatch = useDispatch();
//   // const nickname = props.nickname;
//   // const title = props.title;
//   // const imageUrl = props.imageUrl;
//   // const modifiedAt = props.modifiedAt;
//   // const isheart = props.isheart;
//   let postList = useSelector((state) => state.postSlice);
//   console.log(postList[props.id]);

//   return null;
//   <PostWrap>
//     <PostContainer>
//       <PostHeader>
//         <Avatar
//           alt={nickname}
//           src="/static/images/avatar/1.jpg"
//           style={{
//             marginLeft: 20,
//             marginRight: 10,
//             outline: "solid 2px black",
//           }}
//         />
//         <h3>{nickname}</h3>
//       </PostHeader>
//       <PostImg src={imageUrl} />
//       <TitleWrap>
//         <PostTitle>{title}</PostTitle>
//         <PostHeart
//           onClick={() => {
//             dispatch(changeHeart(isheart));
//           }}
//         >
//           <FontAwesomeIcon icon={faHeart} className="fa-2xl" />
//         </PostHeart>
//       </TitleWrap>
//       <PostTime>{modifiedAt}</PostTime>
//     </PostContainer>
//   </PostWrap>
// };

// const PostWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 60px;
// `;

// const Spinner = styled.img`
//   position: absolute;
// `;

// const PostContainer = styled.div`
//   width: 100%;
//   max-width: 700px;
//   background-color: #4f8a8b;
//   border: 3px solid black;
//   cursor: pointer;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5),
//       3px 3px 10px 0 rgba(0, 0, 0, 0.25);
//     transition: transform 0.4s, translateY 0s linear;
//   }
// `;

// const PostHeader = styled.div`
//   display: flex;

//   align-items: center;
//   padding: 20px;
// `;

// const PostImg = styled.img`
//   width: 90%;
//   object-fit: contain;
//   margin: 0 31px auto;
//   border: 3px solid black;
//   border-radius: 10px;
// `;

// const TitleWrap = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 50px;
// `;

// const PostTitle = styled.span`
//   font-size: 26px;
//   font-weight: normal;
//   padding: 20px;
//   position: relative;
//   left: 20px;
// `;

// const PostHeart = styled.div`
//   position: relative;
//   right: 40px;
//   color: ${(props) => (props.isheart ? "red" : "white")};
// `;

// const PostTime = styled.p`
//   margin: 10px 0 20px 40px;
// `;

// export default Post;

// {
// "file" : ""
//   "title" : "this is title",
// "content" : "hello world"
// }
