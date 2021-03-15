import React from "react";
import { Container } from 'react-bootstrap';


const Home = () =>{
  return (
    <section className='pt-4 pt-md-11'>
      <Container>
        <div className='row align-items-center'>
          <div className='col-12 col-md-5 col-lg-6 order-md-2'>
            <img src='public/assets/20944771.jpg' alt='Hip-hop singer with speaker microphone and small people dancing at the concert'
            className='img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0'/>
          </div>
          <div className='col-12 col-md-7 col-lg-6 order-md-1'>
            <h1 className='display-3 text-center text-md-left'>
              Welcome to<span className='text-primary'> Blind-test</span>
              <br/>
              The best game
            </h1>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Home;