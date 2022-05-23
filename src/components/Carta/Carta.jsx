import React from 'react';
import './Carta.css'

import imgBack from "./../../../img/back.jpg"

const Carta = ({carta, clickCard}) =>{

    return (
        <>
           <div
               className={`BackCard ${carta.show ? "showCard": ""}`}
               style={{backgroundImage: `url(${carta.show ? carta.logo: imgBack})`}}
               onClick={()=> clickCard(carta)}>
           </div>
        </>
    );
}
export default Carta;