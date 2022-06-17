import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getPosts } from "../redux/modules/post";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (posts?.length === 0) {
    return <p>upload file not exist</p>;
  }

  if (error) {
    return <p>error! try again!</p>;
  }
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className="mainPage">
      {posts?.length > 0 &&
        posts.map((p, idx) => (
          <PostWrap key={idx}>
            <PostContainer>
              <PostHeader>
                <Avatar
                  alt={p.nickname}
                  src="/static/images/avatar/1.jpg"
                  style={{
                    marginLeft: 20,
                    marginRight: 10,
                    outline: "solid 2px black",
                  }}
                />
                <h3>{p.nickname}</h3>
              </PostHeader>
              <Link to="/DetailPost" state={{ p: p }}>
                <PostImg src={p.imageUrl} />
              </Link>
              <TitleWrap>
                <PostTitle>{p.title}</PostTitle>
                <PostHeart
                // onClick={() => {
                //   dispatch(changeHeart(p.isHeart));
                // }}
                >
                  <FontAwesomeIcon icon={faHeart} className="fa-2xl" />
                </PostHeart>
              </TitleWrap>
              <PostTime>{p.modifiedAt}</PostTime>
              <ContentBox>
                <p>{p.content}</p>
              </ContentBox>
            </PostContainer>
          </PostWrap>
        ))}
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
  display: none;
`;

export default Main;
