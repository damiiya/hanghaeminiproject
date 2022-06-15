import React, { useRef } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
function PostingForm() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({ mode: onchange });
  const title = useRef();
  title.current = watch("title", "");
  const content = useRef();
  content.current = watch("content", "");
  const tag1 = useRef();
  tag1.current = watch("tag1", "");
  const tag2 = useRef("tag2", "");
  tag2.current = watch("tag2", "");
  const tag3 = useRef("tag3", "");
  tag3.current = watch("tag3", "");
  const [imageSrc, setImageSrc] = React.useState("");
  const Thumbnail = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  const titleErr = errors.title?.type === "required" ? <p>Title 필수</p> : "";
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    const postDto = [
      {
        title: title.current,
        content: content.current,
        imageUrl: null,
        tags: [{ tag: tag1.current }, { tag: tag2.current }],
      },
    ];
    formData.append(
      "postDto",
      new Blob([JSON.stringify(postDto, { contentType: "application/json" })], {
        type: "application/json",
      })
    );
    // formData.append("postDto", JSON.stringify({postDto}, {contentType: 'application/json'}),{type: "application/json"});
    for (const key of formData.keys()) {
      console.log(key);
    }
    for (const value of formData.values()) {
      console.log(value);
    }
    const token = localStorage.getItem("access_token");
    console.log(formData);
    await axios({
      method: "POST",
      url: "http://3.34.188.26/posts/post",
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${token}`,
      },
      data: formData,
    })
      .then(function (response) {
        console.log(response + "asfd");
      })
      .catch(function (error) {
        console.log(error.result);
      });
  };
  return (
    <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
      <WriteContainer>
        <InputContainer>
          <WriteInput>
            <label style={{ fontSize: "24px" }}>Title</label>
            <br />
            {titleErr}
            <input
              type="text"
              name="title"
              style={{ width: "100%", fontSize: "20px" }}
              {...register("title")}
            />
          </WriteInput>
          <h2>Upload Image</h2>
          <WriteInput>
            <input
              type="file"
              id="image"
              accept="image/*"
              name="file"
              {...register("file", { required: true })}
              onChange={(e) => {
                Thumbnail(e.target.files[0]);
              }}
            />
            <div
              className="preview"
              style={{
                border: "solid 1px lightgray",
                padding: "10px",
                backgroundColor: "white",
                maxwidth: "80%",
                height: "200px",
                margin: "5px 10% 0 10%",
              }}
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt="preview-img"
                  style={{
                    border: "solid 1px black",
                    maxWidth: "100%",
                    maxHeight: "200px",
                    position: "cover",
                    margin: "5% 0 5%",
                  }}
                />
              )}
            </div>
          </WriteInput>
          <WriteInput>
            <label>content</label>
            <br />
            <input
              type="textarea"
              style={{
                width: "100%",
                height: "280px",
                justifyContent: "flex-start",
              }}
              name="content"
              {...register("content", { required: true })}
            />
          </WriteInput>
          <WriteInput>
            Tag
            <br />
            <input
              type="text"
              style={{ width: "30%", fontSzie: "14px" }}
              name="tag1"
              {...register("tag1", { required: false })}
            />
            <input
              type="text"
              style={{ width: "30%", fontSzie: "14px" }}
              name="tag2"
              {...register("tag2", { required: false })}
            />
            <input
              type="text"
              style={{ width: "30%", fontSzie: "14px" }}
              name="tag3"
              {...register("tag3", { required: false })}
            />
          </WriteInput>
          <input type="submit" onClick={handleSubmit(onSubmit)} />
        </InputContainer>
      </WriteContainer>
    </form>
  );
}
const WriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 60vw;
  height: 100%;
  margin: 5% 20vw 5%;
  padding: 5px;
  object-fit: contain;
  font-family: "S-CoreDream-8Heavy";
  //background-color: #FA7F72;
  border: 1px solid red;
`;
const InputContainer = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  margin: 10px 5% 10px 5%;
  background-color: #f5a25d; //#4F8A8B
  padding: 20px;
`;
const InputA = styled.input`
  background-color: #e7e7e7;
`;
const WriteInput = styled.div`
  justify-items: center;
  border-radius: 10px;
  margin: 10px 10px 0 10px;
  background-color: #389393;
  padding: 10px;
  border: solid 1px #f27a38;
`;
export default PostingForm;
