import { useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState({
    title: "",
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", post.photo);
    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}
        />
        <button>Upload</button>
        <img src="https://document-files-2024.s3.us-east-1.amazonaws.com/R.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2RA5WBJQZUM5QH2S%2F20240226%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240226T172401Z&X-Amz-Expires=3600&X-Amz-Signature=36aea1ff5f915a6c33b494a6142c01842337589576cb34c344e682e89257ca06&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" />
      </form>
    </div>
  );
}

export default App;
