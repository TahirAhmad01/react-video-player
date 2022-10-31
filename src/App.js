import { useState } from "react";
import VideoPlayer from "./component/videoPlayer";
import "../node_modules/video-react/dist/video-react.css";

function App() {
  const [fileList, setList] = useState(null);
  const [vidUrl, setVidUrl] = useState("");

  const fileSelect = (e) => {
    const uFiles = e.target.files;
    // setList(URL.createObjectURL(uFiles))
    setList([...uFiles]);
  };

  const setLink = (id) => {
    setVidUrl(URL.createObjectURL(fileList[id]));
  };

  console.log(vidUrl);

  return (
    <div className="App">
      <div>
        <input
          type="file"
          id="upload"
          multiple
          onChange={fileSelect}
          accept="video/*"
        />
      </div>

      {fileList !== null &&
        fileList?.map((file, idx) => {
          const { name } = file || {};

          return (
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "10px",
              }}
              key={idx}
              onClick={() => {
                setLink(idx);
              }}
            >
              <div>{name}</div>
              <div>{URL.createObjectURL(file)}</div>
            </div>
          );
        })}

      <VideoPlayer vidUrl={vidUrl} />
    </div>
  );
}

export default App;
