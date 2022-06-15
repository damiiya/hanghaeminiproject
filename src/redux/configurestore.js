import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./modules/post.js";
// import commentSlice from "./modules/comment.js";
// 리듀서 이름: 리듀서 이름.reducer,
const store = configureStore({
  reducer: {
    postSlice: postSlice.reducer,
    // commentSlice: commentSlice.reducer,
  },
});
export default store;