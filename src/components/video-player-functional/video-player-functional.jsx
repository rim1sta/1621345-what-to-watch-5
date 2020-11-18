import PropTypes from 'prop-types';
import React, {useRef, useEffect, useState} from "react";

export const VideoPlayerFunc = (props) => {
  const {poster, src} = props;
  const videoRef = useRef(null);

  // useEffect, useState, useRef

  useEffect(()=>{
    let timeout;
    videoRef.current.oncanplaythrough = () => {
      timeout = setTimeout(()=>{
        videoRef.current.play();
      }, 1000);
    };
    return ()=>{
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      <video
        width='100%'
        height={175}
        muted="muted"
        poster={poster}
        ref = {videoRef}>
        <source src={src} />
      </video>
    </React.Fragment>);
};

VideoPlayerFunc.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default VideoPlayerFunc;
