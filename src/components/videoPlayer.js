import { ControlBar, ForwardControl, Player, ReplayControl } from "video-react";

export default function VideoPlayer({ vidUrl }) {
  return (
    <>
      <Player playsInline poster="/assets/poster.png" src={vidUrl} autoPlay>
        <ControlBar autoHide={false}>
          <ReplayControl seconds={5} order={2.1} />
          <ForwardControl seconds={5} order={3.1} />
        </ControlBar>
      </Player>
    </>
  );
}
