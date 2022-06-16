import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import DetailPost from "./pages/DetailPost.js";
import EditPost from "./pages/EditPost";
import WritePost from "./pages/WritePost";
import axios from 'axios';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/DetailPost" element={<DetailPost />} />
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="/WritePost" element={<WritePost />} />
      </Routes>
      {/* <div className="footer" style={{backgroundColor:"red", transform: "translateY(-100%)"}}>h</div> */}
    </div>
  );
}

export default App;
