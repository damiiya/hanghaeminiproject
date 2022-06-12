import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user.js";
import post from "./modules/post.js";

const configureStore = configureStore({
  reducer: {
    user: user.reducer,
    post: post.reducer,
  },
});

export default configureStore;
