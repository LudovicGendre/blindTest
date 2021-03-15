import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/20944771.jpg'
import player from '../components/player'
import { disconnectUser } from "../components/userEffects";



const Profil = () => {
  const { isLoading, error, data } = player()
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
    <header className='bg-dark pt-9 pb-11 d-none d-md-block' style={{paddingBottom:'10%'}}>
      <Container>
        <div className='row align-items-center'>
          <div className='col'>
            <h1 className='font-weight-bold text-white mb-2'>
              Account Settings
            </h1>
            <p className='font-size-lg text-white mb-0'>
            Settings for {data?.player.name}
            </p>
          </div>
          <div className='col-auto'>
            <button className='btn btn-sm text-white btn-secondary' 
             to="/auth"
            onClick={() => disconnectUser()} >
                Log Out
            </button>
          </div>
        </div>
      </Container>
    </header>
    <main className='pb-8 pb-md-11 mt-md-n6' style={{marginTop:'-5%'}}>
      <Container>
        <div className='row'>
          <div className='col-12 col-md-3'>
          </div>
          <div className='col-12 col-md-9'>
            <div className='card card-bleed shadow-light-lg mb-6'>
              <div className='card-header'>
                <h4>Basic Information</h4>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12 col-md-6'>
                    <div className='form-group'>
                      <label>Name</label>
                      <p>{data?.player.name}</p>
                    </div>
                  </div>
                  <div className='col-12 col-md-6'>
                    <div className='form-group'>
                      <label>Total Game</label>
                      <p>{data?.player.nb_played_games}</p>
                    </div>
                  </div>
                  <div className='col-12'>
                  <div className='form-group'>
                    <label>Avatar</label>
                    <img src={data?.player?.avatar} alt='icon avatar player'
                  className='mx-auto d-block' style={{height:'150px'}} />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
    </>
  )
}

export default Profil;