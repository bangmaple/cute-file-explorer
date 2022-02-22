import './css/index.css';
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faGamepad, faMoneyBill, faClover } from '@fortawesome/free-solid-svg-icons'
import {PASTEL_COLOR} from "../../constants/constant";
import { useNavigate } from "react-router-dom";

const Navigation = () => {


    const navigate = useNavigate();
    
    return (<div className="main bg-white">

            <div className="d-flex-center full-height flex-wrap">
                <button onClick={() => navigate('/explorer')} className="navigation d-flex-center flex-column mr-2">
                    <FontAwesomeIcon color={PASTEL_COLOR} icon={faFileCode} size="3x"/>
                    <span className="text-pastel mt-1">File Explorer</span>
                </button>
                <a href="#" onClick={() => navigate('/card')} className="navigation d-flex-center flex-column mr-2">
                    <FontAwesomeIcon color={PASTEL_COLOR} icon={faGamepad} size="3x"/>
                    <span className="text-pastel mt-1">Card Game</span>
                </a>
                <a href="#" onClick={() => navigate('/money')} className="navigation d-flex-center flex-column mr-2">
                    <FontAwesomeIcon color={PASTEL_COLOR} icon={faMoneyBill} size="3x"/>
                    <span className="text-pastel mt-1">Money Lover</span>
                </a>
                <a href="#" onClick={() => navigate('/lucky')} className="navigation d-flex-center flex-column">
                    <FontAwesomeIcon color={PASTEL_COLOR} icon={faClover} size="3x"/>
                    <span className="text-pastel mt-1">Lucky Draw</span>
                </a>
            </div>
        </div>
    );

};

export default Navigation;