import './css/index.css';
import {useState} from "react";

const CardGame = () => {

    const [isCard1Open, setCard1Open] = useState(false);
    const [isCard2Open, setCard2Open] = useState(false);
    const [isCard3Open, setCard3Open] = useState(false);
    const [isCard4Open, setCard4Open] = useState(false);

    const RevealCard = ({image, isCardOpen}) => {
        return (
            <div className={`flip-card-back d-flex-center ${isCardOpen ? 'position-absolute' : ''}`}>
                <img src={image} style={{
                    width: '70px'
                }}/>
            </div>
        );
    }

    const QuestionCard = ({handleCardOpen, isCardOpen}) => {
        return (
            <a onClick={handleCardOpen} href="#"
               className={`flip-card-front d-flex-center ${isCardOpen ? 'display-none position-absolute' : ''}`}>
                <span style={{
                    fontSize: '8rem',
                    color: 'var(--pastel-color)'
                }}>?</span>

            </a>
        );
    }

    return (
        <div className="main bg-white">
            <div className="d-flex flex-wrap">
                <div className={`flip-card ${isCard1Open ? 'flip-card-done' : ''}`}>
                    <div className="flip-card-inner d-flex">
                        {isCard1Open ? <>
                            <QuestionCard isCardOpen={isCard1Open}/>
                            <RevealCard image="../images/SVG/tomato.svg"/>
                        </> : <QuestionCard handleCardOpen={() => {
                            setCard1Open(!isCard1Open)
                        }
                        }/>}
                    </div>
                </div>
                <div className={`flip-card ${isCard2Open ? 'flip-card-done' : ''}`}>
                    <div className="flip-card-inner d-flex">
                        {isCard2Open ? <>
                            <QuestionCard isCardOpen={isCard2Open}/>
                            <RevealCard image="../images/SVG/pumkin.svg"/>
                        </> : <QuestionCard handleCardOpen={() => {
                            setCard2Open(!isCard2Open)
                        }
                        }/>}
                    </div>
                </div>
                <div className={`flip-card ${isCard3Open ? 'flip-card-done' : ''}`}>
                    <div className="flip-card-inner d-flex">
                        {isCard3Open ? <>
                            <QuestionCard isCardOpen={isCard3Open}/>
                            <RevealCard image="../images/SVG/onion.svg"/>
                        </> : <QuestionCard handleCardOpen={() => {
                            setCard3Open(!isCard3Open)
                        }
                        }/>}
                    </div>
                </div>
                <div className={`flip-card ${isCard4Open ? 'flip-card-done' : ''}`}>
                    <div className="flip-card-inner d-flex">
                        {isCard4Open ? <>
                            <QuestionCard isCardOpen={isCard4Open}/>
                            <RevealCard image="../images/SVG/two-tomato.svg"/>
                        </> : <QuestionCard handleCardOpen={() => {
                            setCard4Open(!isCard4Open)
                        }
                        }/>}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default CardGame;