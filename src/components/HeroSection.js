import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/cuadros_art_intro.mp4' autoPlay loop muted />
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <h1>Cuadros Art</h1>
      <p>Tu lugar para adquirir buen arte</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/ingresar'
        >
          Ingresar
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          linkTo='/torneos'
        >
          Novedades <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
