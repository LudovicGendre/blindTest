import React from "react";
import { Container } from 'react-bootstrap';
import { useQuery } from "react-query"
import firebase from 'firebase'
import { Link } from "react-router-dom";
import logo from '../assets/20944771.jpg'



const Home = () => {
  const fa = firebase.auth();
  const userId = fa.currentUser?.uid
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      `https://europe-west1-ynov-b3-21.cloudfunctions.net/players?id=${userId}`
    ).then((res) => res.json())
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data)
  return (
    <>
      <section className='pt-4 pt-md-11'>
        <Container>
          <div className='row align-items-center'>
            <div className='col-12 col-md-5 col-lg-6 order-md-2'>
              <img src={logo} alt='Hip-hop singer with speaker microphone and small people dancing at the concert'
                className='img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0' />
            </div>
            <div className='col-12 col-md-7 col-lg-6 order-md-1'>
              <h1 className='display-3 text-center text-md-left'>
                Welcome to<span className='text-primary'> Blind-test</span>
                <br />
              The best game
            </h1>
              <p className='lead text-center text-md-left text-muted mb-6 mb-lg-8'>
                Come and test your musical knowledge with us
            </p>
              <div className='text-center text-md-left'>
                <Link to='/game' className='btn btn-primary shadow lift mr-1'>Play</Link>
                <Link to='/profile' className='btn btn-primary-soft lift'>Profile</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
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

export default Home;