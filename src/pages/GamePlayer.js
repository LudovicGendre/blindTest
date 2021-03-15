import React from "react";
import { Container } from 'react-bootstrap';
import {Questions} from '../components/question'
import { Game } from './Game'



const GamePlay = () => {
  const { isLoading, error, data, status } = Questions()
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data)
  return (
    <div>
      {status === "success" ? (
        <Game question={data?.questions[0]}/>
      ) : null
    }
    </div>

  )
}

export default GamePlay;