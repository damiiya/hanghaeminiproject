import React from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  return (
    <PostWrap>
      <PostContainer>
        <PostHeader>
          <Avatar
            alt="username"
            src="/static/images/avatar/1.jpg"
            style={{
              marginLeft: 20,
              marginRight: 10,
              outline: "solid 2px black",
            }}
          />
          <h3>Username</h3>
        </PostHeader>
        <PostImg
          src="https://images.unsplash.com/photo-1654923064926-be7e64267a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <TitleWrap>
          <PostTitle>this is title</PostTitle>
          <PostHeart>
            <FontAwesomeIcon icon={faHeart} className="fa-2xl" />
          </PostHeart>
        </TitleWrap>

        <PostTime>0000-00-00</PostTime>
      </PostContainer>
    </PostWrap>
  );
};

const PostWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #4f8a8b;
  border: 3px solid black;
`;

const PostHeader = styled.div`
  display:flex;
  
  align-items: center;
  padding: 20px;
  
  
`;

const PostImg = styled.img`
  width: 90%;
  object-fit: contain;
  margin: 0 31px auto;
  border: 3px solid black;
  border-radius: 10px;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const PostTitle = styled.span`
  font-size: 26px;
  font-weight: normal;
  padding: 20px;
  position: relative;
  left: 20px;
`;

const PostHeart = styled.div`
  position: relative;
  right: 40px;
`;

const PostTime = styled.p`
  margin: 10px 0 20px 40px;
`;

export default Post;
