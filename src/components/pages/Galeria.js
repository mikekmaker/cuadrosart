import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import '../../App.css';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "dayjs/locale/es";
import { UseFetch } from '../../UseFetch';
import { Config } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer';
import { handleError } from '../HandlerError';
import './Galeria.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReactCardFlip from "react-card-flip";
import './../FlippingCards.css';
import FlipCardItem from './../FlipCardItem';

export default function Galeria() {
  //declare flipping card
  const [flip, setFlip] = useState(false);
  const [flip0, setFlip0] = useState(false);
  //JSON datos obras de artes
  let url = `${Config.beApiPrefix}/galeria`;
  let model = null;
  const {dataResponse, statusCode, loading, error} = UseFetch(url, null, model);
  
  //fetch galeria
  useEffect(() => {
    console.log('Response Data:', dataResponse);
    console.log("CARGANDO?");
    console.log('Loading:', loading);
    console.log("QUE ERROR DEVUELVE USEFETCH?");
    console.log(error);
    console.log('status:', statusCode);

    if (loading) {
      toast.info('Loading...', {autoClose: 500,});
    }
    else
    {
      if (error) {
        toast.error(`${eventError}: ${handleError(error, statusCode)}`, {autoClose: 2000,});
      }
      else
      {
        if (dataResponse) {
          toast.success(`${eventOk}`, {autoClose: 1500,});
          console.log(dataResponse);
        }
      }
    }
  }, [dataResponse, statusCode, loading, error]);

   //mensajes
   const eventOk = "Galeria actualizada exitosamente";
   //const incompleteFieldsError = "Por favor, complete todos los campos obligatorios.";
   //const mandatoryFieldMsg = "Este campo es obligatorio";
   const eventError = "Se produjo un error";

  return (
  <>
    <div className='hero-container'>
      <h2 className='sign-up'>GALERIA</h2>
        <div className='hero-container'>
          <div className="app-container">
            <div className='flip_cards__container'>
              <div className='flip_cards__wrapper'>
                <ul className='flip_cards__items'>
                        <ReactCardFlip isFlipped={flip0} name="card1"
                        flipDirection="horizontal">
                        <div className='flip_cards_container'>
                            <FlipCardItem
                                src='images/the_scream_demo.jpg'
                                text='El Grito'
                                label='420 X 297'
                                path='/galeria'
                            />
                            <br />
                            <br />
                            <button className="flip_card_button" onClick={() => setFlip0(!flip0)}>
                                info</button>
                        </div>
                        <div className='flip_cards_container'>
                            <FlipCardItem
                                src='images/old_canva.jpg'
                                text='ir al carrito'
                                label='este cuadro fue pintado por el artista Munch'
                                path='/galeria'
                            />
                            <br />
                            <button className="flip_card_button" onClick={() => setFlip0(!flip0)}>
                                pintura</button>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={flip}
                        flipDirection="horizontal">
                        <div className='flip_cards_container'>
                            <FlipCardItem
                                src='images/the_scream_demo.jpg'
                                text='El Grito'
                                label='420 X 297'
                                path='/galeria'
                            />
                            <br />
                            <br />
                            <button className='flip_card_button' onClick={() => setFlip(!flip)}>
                                info</button>
                        </div>
                        <div className='flip_cards_container'>
                            <FlipCardItem
                                src='images/old_canva.jpg'
                                text='ir al carrito'
                                label='este cuadro fue pintado por el artista Munch'
                                path='/galeria'
                            />
                            <br />
                            <button className='flip_card_button' onClick={() => setFlip(!flip)}>
                                pintura</button>
                        </div>
                    </ReactCardFlip>
                </ul>
              </div>
            </div>      
          </div>
        </div>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Comprar <i className='fa fas fa-cart-shopping' />
          </Button>
        </div>
    </div>
    <ToastContainer />
    <Footer/>
    </>
);
}
