import { useState } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

function App() {
  const [fileList, setList] = useState("")

  const fileSelect = (e) => {
    const uFiles = e.target.files[0];
      console.log(e);
      setList(URL.createObjectURL(uFiles))
  }

  console.log(fileList)

  return (
    <div className="App">

      <div><input type="file" id="upload" multiple onChange={fileSelect} accept="video/*"/> </div>

      <div>{FileList}</div>

      {fileList !== "" && <Video  loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            // poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src={fileList} type="video/webm" />
            <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
        </Video>}
    </div>
  );
}

export default App;
