import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from "react-router-dom";
import { deletePosts } from "../redux/modules/post";

const DetailPost = (props) => {
  const location = useLocation();
  console.log(location);

  const data = location.state.p;
  console.log(data);

  const dispatch = useDispatch();

  const Id = data.id;
  const deletePosting = () => {
    dispatch(deletePosts(Id));
  };

  // const getCommenting = () => {
  //   dispatch(getComments(Id));
  // };

  // const commentLists = useSelector((state) => state.comment.list);

  return (
    <div className="mainPage">
      <Link to="/EditPost" state={{ data: data }}>
        <button>수정</button>
      </Link>
      <button onClick={deletePosting}>삭제</button>
      <PostWrap>
        <PostContainer>
          <PostHeader>
            <Avatar
              alt={data.nickname}
              src="/static/images/avatar/1.jpg"
              style={{
                marginLeft: 20,
                marginRight: 10,
                outline: "solid 2px black",
              }}
            />
            <h3>{data.nickname}</h3>
          </PostHeader>
          <PostImg src={data.imageUrl} />
          <TitleWrap>
            <PostTitle>{data.title}</PostTitle>
            <PostHeart
            // onClick={() => {
            //   dispatch(changeHeart(p.isHeart));
            // }}
            >
              <FontAwesomeIcon icon={faHeart} className="fa-2xl" />
            </PostHeart>
          </TitleWrap>
          <PostTime>{data.modifiedAt}</PostTime>
          <ContentBox>
            <p>{data.contents}</p>
          </ContentBox>
          {/* {commentLists.map((c) => {
            return (
              <CommentBox key={c.Id}>
                <CommentInput />
                <button  style={{ justifyContent: "center" }}>BUTTON</button>
                <CommentList>
                  <Comment>
                    <span style={{ fontWeight: "bold" }}>{c.nickName}</span>
                    <br />
                    {c.comment}
                  </Comment>
                </CommentList>
              </CommentBox>
            );
          })} */}
        </PostContainer>
      </PostWrap>
    </div>
  );
};

const PostWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Spinner = styled.img`
  position: absolute;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 700px;
  background-color: #4f8a8b;
  border: 3px solid black;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5),
      3px 3px 10px 0 rgba(0, 0, 0, 0.25);
    transition: transform 0.4s, translateY 0s linear;
  }
`;

const PostHeader = styled.div`
  display: flex;
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

const ContentBox = styled.div`
  width: 100%;
  height: 100px;
  padding-left: 40px;
`;

const CommentBox = styled.div`
  width: 75%;
  margin: 0 40px auto;
`;

const CommentInput = styled.input`
  width: 100%;
  margin: 0 40px 20px 40px;
`;

const CommentList = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Comment = styled.p`
  font-weight: normal;
  padding: 5px;
`;

export default DetailPost;
