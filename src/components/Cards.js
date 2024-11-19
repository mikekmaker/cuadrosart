import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Decid&iacute; libremente c&oacute;mo quer&eacute;s la decoraci&oacute;n de tu espacio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Titulo: xxxxxxxxxxxxxxxxxxx'
              label='Autor: xxxxxxxxxxxxxxxxxxx'
              path='/galeria'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Titulo: xxxxxxxxxxxxxxxxxxx'
              label='Autor: xxxxxxxxxxxxxxxxxxx'
              path='/galeria'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Titulo: xxxxxxxxxxxxxxxxxxx'
              label='Autor: xxxxxxxxxxxxxxxxxxx'
              path='/galeria'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Titulo: xxxxxxxxxxxxxxxxxxx'
              label='Autor: xxxxxxxxxxxxxxxxxxx'
              path='/galeria'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Titulo: xxxxxxxxxxxxxxxxxxx'
              label='Autor: xxxxxxxxxxxxxxxxxxx'
              path='/galeria'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
