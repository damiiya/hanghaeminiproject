import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";


const serverUrl = "http://3.34.188.26";

export const getPosts = createAsyncThunk("GET/getPosts", async () => {
  return axios({
    method: "get",
    url: `${serverUrl}/posts`,
  }).then((response) => response.data);
});

export const getComments = createAsyncThunk("GET/getComments", async (Id) => {
  return axios({
    method: "get",
    url: `${serverUrl}/posts/${Id}/comments`,
  }).then((response) => response.data);
});

export const deletePosts = createAsyncThunk(
  "DELETE/deletePosts",

  async (Id) => {
    console.log(Id);
    const token = localStorage.getItem("access_token");
    const response = await axios
      .delete(`${serverUrl}/posts/post/${Id}`, {
        headers: { Authorization: `${token}` },
      })
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = "";
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    },

    [getComments.fulfilled]: (state, action) => {
      console.log("Get comment!");
      state.list = action.payload.commentLists;
    },
  },

  [getComments.rejected]: (state, action) => {
    console.log("Reject!");
  },

  [deletePosts.fulfilled]: (state, action) => {
    if (action.payload) {
      const lists = current(state.list).filter((post, i) => {
        return post.id !== action.payload;
      });
      console.log("Delete Post");
      state.list = lists;
    }
  },
  [deletePosts.rejected]: (state, action) => {
    console.log("Delete reject");
    alert("본인이 작성한 게시글이 아닙니다😅");
  },
});

export default postsSlice.reducer;

