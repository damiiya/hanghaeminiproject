import React, { useState, useEffect } from "react";
import Post from "../components/Post.js";
import styled from "styled-components";

function Main() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Main;
