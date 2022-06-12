import { createSlice } from "@reduxjs/toolkit";

const post = createSlice({
  name: post,
  initialState: {
    id: 1,
    nickname: "name",
    title: "good",
    content: "hi there",
    imageUrl:
      "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    modifiedAt: "2022-06-13",
    isheart: true,
  },
});

export default post.reducer;
