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
              text='Cancha Premium'
              label='Confort'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Cancha al Aire Libre'
              label='Relax'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Cancha con amplias tribunas'
              label='Emoci&oacute;n'
              path='/services'
            />
            <CardItem
              src='images/wpt.jpg'
              text='Un espacio para torneos y canchas libres todo el a&ntilde;o'
              label='Comunidad'
              path='/products'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Cancha doble para torneos libres de hasta 16 personas'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
