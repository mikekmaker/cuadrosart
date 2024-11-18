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
import './../Cards.css';
import CardItem from './../CardItem';

export default function Galeria() {
  //declare flipping card
  const [flip, setFlip] = useState(false);

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
          <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                        <ReactCardFlip isFlipped={flip}
                        flipDirection="horizontal">
                        <div style={{ background: 'rgba(1, 1, 1, 0.06)', width:'100%' }}>
                            <CardItem
                                src='images/the_scream_demo.jpg'
                                text='El Grito'
                                label='420 X 297'
                                path='/services'
                            />
                            <br />
                            <br />
                            <button style={{
                                width: '150px',
                                padding: '10px',
                                fontSize: '20px',
                                background: '#f5d9fa',
                                fontWeight: 'bold',
                                borderRadius: '5px'
                            }} onClick={() => setFlip(!flip)}>
                                info</button>
                        </div>
                        <div style={{ background: 'rgba(1, 1, 1, 0.06)', width:'100%'}}>
                            <CardItem
                                src='images/old_canva.jpg'
                                text='Cancha Premium'
                                label='este cuadro fue pintado por el artista Munch'
                                path='/services'
                            />
                            <br />
                            <button style={{
                                width: '150px',
                                padding: '10px',
                                fontSize: '20px',
                                background: '#f5d9fa',
                                fontWeight: 'bold',
                                borderRadius: '5px'
                            }} onClick={() => setFlip(!flip)}>
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
