import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
// serverUrl = "http://3.34.188.26/";
// // 각 url 자리마다 엔드포인트 다르게 써줘야 하는지 확인 필요
// // ** 로그인한 유저인지 token을 어디서 체크해야 되는지 확인 필요
// // 메인페이지에 로드될 전체게시글 DB를 불러오는 get 요청
// // url 확인, db 확인, get/then 확인
// export const getPostDB = createAsyncThunk("GET/getPostDB", async () => {
//   return axios({
//     method: "get",
//     url: ""
//   }); .then(response => response.data.postList);
// });
// // 포스팅 작성한 것을 DB에 업로드하는 post 요청
// // url 확인, db 확인, post/then 확인
// // {tag : Post.tag} 추가 기능 구현 시 확인
// export const uploadPostDB = createAsyncThunk("POST/uploadPostDB", async (Post) => {
//   const PostDB = {
//     title: Post.title,
//     content: Post.content,
//     // imageUrl: Post.imageUrl,
//   }
//   console.log(PostDB);
//   return axios({
//     method: "post",
//     url: ""
//   }); then(response => console.log(response));
//   return Post;
// });
// 포스팅 내용 수정하는 put 요청
// url 확인, db 확인, put/then 확인
// {tag : Post.tag} 추가 기능 구현 시 확인
// export const EditPostDB = createAsyncThunk("PUT/EditPostDB", async (Post) => {
//   const EPostDB = {
//     title: Post.title,
//     content: Post.content,
//     imageUrl: Post.imageUrl,
//   }
//   console.log(EPostDB);
//   return axios({
//     method: "put",
//     url: ""
//   }); .then(response => console.log(response));
//   return Post;
// });
// // 포스팅 삭제하는 delete 요청
// // url 확인, db 확인, delete/then 확인
// // middleware 처리해주기


const postSlice = createSlice({
  name: "post",
  initialState: {
    userLogin: false,
    list: [{}],
  },
  reducers: {
    OnLoginUser: (state, action) => {
      const UserState = JSON.parse(action.payload);
      state.userLogin = UserState;
    },
  },
});
export let { OnLoginUser } = postSlice.actions;
export default postSlice.reducer;
// initialState: [
//   {
//     id: 1,
//     nickname: "name1",
//     title: "title1",
//     content: "content1",
//     imageUrl:
//       "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//     modifiedAt: "2022-06-13",
//     isheart: false,
//   },
//   {
//     id: 2,
//     nickname: "name2",
//     title: "title2",
//     content: "content2",
//     imageUrl:
//       "https://images.unsplash.com/photo-1654854607385-3295c8be849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     modifiedAt: "2022-06-13",
//     isheart: false,
//   },
//   {
//     id: 3,
//     nickname: "tame2",
//     title: "title2",
//     content: "content2",
//     imageUrl:
//       "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     modifiedAt: "2022-06-13",
//     isheart: false,
//   },
// ],