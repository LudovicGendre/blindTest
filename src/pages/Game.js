import React from "react";
import './Game.css'

export const Game = ({ question }) => {
  return (
    <>
      <p align="center">{question?.question}</p>
      <div className='audio-container'>
      <audio  controls>
        <source  src={question?.audio_url} />
      </audio>
      </div>
    </>
  )
}