import './FramedVideo.module.css';
import { useRef, useEffect } from 'react';

function FramedVideo(props) {
    const videoComponent = useRef(null);

    useEffect(() => {
      videoComponent.current.oncanplaythrough = () => {
        console.log("Can play through video without stopping");
        console.log("duration", videoComponent.current.duration);
      };
    }, []);

    const play = () => {
      videoComponent.current.play();
    }

    const pause = () => {
      videoComponent.current.pause();
    }
  
    return (
        <figure className="Wrapper">
          <video width="100%" controls ref={videoComponent}>
            <source src={props.src} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <button onClick={() => play()}>Play</button>
          <button onClick={() => pause()}>pause</button>
        </figure>
    );
}

export default FramedVideo;