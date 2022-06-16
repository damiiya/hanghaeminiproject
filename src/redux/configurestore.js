import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./modules/test";

// 리듀서 이름: 리듀서 이름.reducer,
const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
export default store;
