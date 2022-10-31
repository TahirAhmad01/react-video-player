import { Player } from "video-react";


export default function VideoPlayer({ vidUrl }) {
  return (
    <>
      <Player playsInline poster="/assets/poster.png" src={vidUrl} />
    </>
  );
}
