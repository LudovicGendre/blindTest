import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/20944771.jpg'
import player from '../components/player'



const Profil = () => {
  const { isLoading, error, data } = player()
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data)
  return (
    <>
      <section style={{ marginTop: '5%', marginBottom: '15%' }} className='py-8 py-md-11 border-bottom'>
        <Container>
          <img className='mx-auto d-block rounded-circle' style={{height:'200px',width:'20%'}} src={data?.player?.avatar} alt='avatar player'></img>
          <h2 className='text-center'>We are happy to see you again, {data?.player.name}</h2>
          <br></br>
          <div className='row'>
            <br/>
            <div className='col-12 col-md-4'>
              <h3>Total Game Played</h3>
              <p className='text-muted mb-6 mb-md-0'>
                You currently have {data?.player.nb_played_games} games played
              </p>
            </div>
            <div className='col-12 col-md-4'>
            <h3>Total Game Played</h3>
              <p className='text-muted mb-6 mb-md-0'>
                You currently have {data?.player.nb_played_games} games played
              </p>
            </div>
            <div className='col-12 col-md-4'>
            <h3>Total Game Played</h3>
              <p className='text-muted mb-6 mb-md-0'>
                You currently have {data?.player.nb_played_games} games played
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Profil;