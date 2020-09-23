/*
import React, { useState } from "react";
import axios from "axios";
const jwt:any = localStorage.getItem("token");



export default () => {
  const [content, setContent] = useState("");
  const onChange = (e:any) => {
    setContent(e.target.files[0]);
  };
  const onSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("streamfile", content);
    formData.append("jwt", jwt);
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:4002/upload_report/cke9oq8tg00039ko3j6eoqzwv",
        data: formData,
        headers: {
          Authorization: jwt,
          "Content-Type" : "multipart/form-data",
        },
      });
      console.log(res.data);
      alert("The file is successfully uploaded");
    } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  };
  return (
    <form
      action="/"
      encType="multipart/form-data"
      method="post"
      onSubmit={onSubmit}
    >
      <input
        type="file"
        name="file-to-upload"
        accept=".docx,.pages,.hwp,.pdf,.png,.jpg,.txt,.zip"
        onChange={onChange}
      />
      <input type="submit" value="Upload" />
    </form>
  );
};
*/