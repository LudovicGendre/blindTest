import React from "react";
import './Game.css'
import { Container } from 'react-bootstrap';
import CountDown from '../Common/timer'

export const Game = ({ question }) => {
  return (
    <>
      <main className='pb-8 pb-md-11 mt-md-n6'>
        <Container>
          <div align='center' className='card-header' style={{ marginBottom: '5%', marginTop: '5%' }}>
            <h4>{question?.question}</h4>
          </div>
          <div className='row justify-content-md-center'>
            <CountDown minutes={5} />
          </div>
          <div className='audio-container'>
            <audio controls style={{ marginBottom: '5%' }}>
              <source src={question?.audio_url} />
            </audio>
          </div>
          <div className='card card-bleed shadow-light-lg mb-6'>
            <div className='card-body'>
              <div className='row'>
                {question?.answers.map((answer, index) => {
                  return (
                    <div className='col-12 col-md-3'>
                      <button className='btn btn-dark'>{answer}</button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}