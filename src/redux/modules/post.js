import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("GET/POSTS", async () => {
  return axios({
    method: "get",
    url: "http://3.34.188.26/posts",
  }).then((response) => response.data);
});

// axios({
//   method: "get",
//   url: "http://3.34.188.26/posts",
// });
// then((response) => response.data.postList);

//   const testSlice = createSlice({
//     name: "users",
//     initialState: {
//       loading: false,
//       users: [],
//     },
//     reducers: {
//       usersLoading(state,action) {
//         if (state.loading ==='idle'){
//           state.loading ='pending'
//         }
//       },
//       usersReceived(state,action) {
//         if (state.loading === 'pending') {
//           state.loading = 'idle'
//           state.users = JSON.parse(action.payload)
//         }
//       },
//     },
//   })

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
  },
});

//   export const { usersLoading, usersReceived} = userSlice.action
export default postsSlice.reducer;

//   const postSlice = createSlice({
//     name: "post",
//     initialState: {
//       userLogin: false,
//       list: [{}],
//     },
//     reducers: {
//       OnLoginUser: (state, action) => {
//         const UserState = JSON.parse(action.payload);
//         state.userLogin = UserState;
//       },
//     },

//   });

//   export let { OnLoginUser } = postSlice.actions;

//   export default postSlice.reducer;
