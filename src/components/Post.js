import React from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const Post = () => {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar
          alt="username"
          src="/static/images/avatar/1.jpg"
          style={{ marginRight: 10 }}
        />
        <h3>Username</h3>
      </PostHeader>

      <PostImg
        src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <PostTitle>this is title</PostTitle>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  max-width: 500px;
  background-color: white;
  border: 1px solid lightgray;
  margin-bottom: 45px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const PostImg = styled.image`
  width: 100%;
  object-fit: contain;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;

const PostTitle = styled.h4`
  font-weight: normal;
  padding: 20px;
`;

export default Post;
