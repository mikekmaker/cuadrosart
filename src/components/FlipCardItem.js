import React from 'react';
import { Link } from 'react-router-dom';

function FlipCardItem(props) {
  return (
      <li className='flip_cards__item'>
        <Link className='flip_cards__item__link' to={props.path}>
          <figure className='flip_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='flip_cards__item__img'
              alt='Card'
              src={props.src}
            />
          </figure>
          <div className='flip_cards__item__info'>
            <h5 className='flip_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
  );
}

export default FlipCardItem;
