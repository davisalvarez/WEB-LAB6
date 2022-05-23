import React from 'react'
import './Tablero.css'
import Carta from "./../Carta/Carta.jsx"
import imgRa from "../../../img/ra.jpg";
import imgBlue from "../../../img/BlueAyesWhiteDragon.jpg";
import imgDark from "../../../img/darkMagician.jpg";
import imgDarkG from "../../../img/darkMagicianGirl.jpg";
import imgExodia from "../../../img/exodia.png";
import imgJinzo from "../../../img/jinzo.png";
import imgObelisk from "../../../img/obelisk.jpg";
import imgSlifer from "../../../img/slifer.jpg";

const Tablero = () => {

    const listado = [
        {
            id: 1,
            logo: imgRa,
            show: false,
            pair: 1
        },
        {
            id: 2,
            logo: imgBlue,
            show: false,
            pair: 2
        },
        {
            id: 3,
            logo: imgDark,
            show: false,
            pair:3
        },
        {
            id: 4,
            logo: imgDarkG,
            show: false,
            pair: 4
        },
        {
            id: 5,
            logo: imgExodia,
            show: false,
            pair: 5
        },
        {
            id: 6,
            logo: imgJinzo,
            show: false,
            pair: 6
        },
        {
            id: 7,
            logo: imgObelisk,
            show: false,
            pair: 7
        },
        {
            id: 8,
            logo: imgSlifer,
            show: false,
            pair: 8
        },
        {
            id: 9,
            logo: imgRa,
            show: false,
            pair: 1
        },
        {
            id: 10,
            logo: imgBlue,
            show: false,
            pair: 2
        },
        {
            id: 11,
            logo: imgDark,
            show: false,
            pair: 3
        },
        {
            id: 12,
            logo: imgDarkG,
            show: false,
            pair: 4
        },
        {
            id: 13,
            logo: imgExodia,
            show: false,
            pair: 5
        },
        {
            id: 14,
            logo: imgJinzo,
            show: false,
            pair: 6
        },
        {
            id: 15,
            logo: imgObelisk,
            show: false,
            pair: 7
        },
        {
            id: 16,
            logo: imgSlifer,
            show: false,
            pair: 8
        }

    ]
    const [deck, setDeck] = React.useState(listado.sort(() => Math.random() - 0.5));
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [moves, setMoves] = React.useState(0)

    const clickCard = (carta) =>{
        console.log("id", carta.id)
        if(selectedCard === null){
            setSelectedCard(carta)
            flipCard(carta.id)
            setMoves(moves+1);
        }else {
            if (selectedCard.id !== carta.id){
                flipCard(carta.id)
                setMoves(moves+1);

                if (selectedCard.pair === carta.pair){
                    deck.forEach(c =>{
                        if (c.id ===carta.id){
                            c.show = 1;
                        }
                        if (c.id ===selectedCard.id){
                            c.show = 1;
                        }
                    })

                    /*deck[carta.id-1].show = 1
                    deck[selectedCard.id-1].show = 1*/
                    setDeck([...deck]);
                }else {
                    setTimeout(()=>{
                        flipCard(carta.id)
                        flipCard(selectedCard.id)
                    }, 3000)
                }
                setSelectedCard(null)
            }
        }
        checkWin();
    }

    const flipCard = (id)=> {
        deck.forEach(carta =>{
            if (carta.id ===id){
                if (carta.show!==1){
                    carta.show = !carta.show;
                }
            }
        })

        setDeck([...deck]);
    }

    const checkWin= ()=>{
        let cont = 0
        deck.forEach(carta => {
            if (carta.show ===1){
                cont++;
            }
        })
        if (cont>=16)
            alert("Juego completado!")
    }

    return (
        <div className={"container"}>
            <h1>Memoria</h1>
            <div id={"tablero"} className={"gridTablero"}>
                {deck.map((carta) => <Carta key={carta.id} carta={carta} clickCard={clickCard}/>)}
            </div>
            <p className={"txtGiros"}>Giros: {moves}</p>
        </div>
    );
};

export default Tablero;