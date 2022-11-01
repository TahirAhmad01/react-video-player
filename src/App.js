import "flowbite";
import { useState } from "react";
import "../node_modules/video-react/dist/video-react.css";
import "./assets/css/input.css";
import FileDragDrop from "./components/fileDragDrop";
import VideoPlayer from "./components/videoPlayer";

function App() {
  const [fileList, setList] = useState(null);
  const [vidUrl, setVidUrl] = useState("");

  const setLink = (id) => {
    setVidUrl(URL.createObjectURL(fileList[id]));
  };

  return (
    <div className="App">
      <FileDragDrop setVidList={setList} />

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
              className=" text-green-500"
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
