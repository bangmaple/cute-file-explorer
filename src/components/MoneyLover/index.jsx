import './css/index.css';
import {useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode, faGamepad, faMoneyBill, faClover, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import {PASTEL_COLOR} from "../../constants/constant";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const MoneyLover = () => {
    
    const navigate = useNavigate();
    const selectedFile = useRef(null);

    const [isAddExpenseModalOpen, toggleAddExpenseModalOpen] = useState(false);
    
    return (<div className="main bg-white">

            <div className="d-flex-center full-height flex-wrap">
                <a href="#" onClick={() => toggleAddExpenseModalOpen(!isAddExpenseModalOpen)}
                   className="navigation d-flex-center flex-column mr-2">
                    <FontAwesomeIcon color={PASTEL_COLOR} icon={faFileCode} size="3x"/>
                    <span className="text-pastel mt-1">Add </span>
                </a>
                <Modal className="add-modal"
                    isOpen={isAddExpenseModalOpen}
                    onRequestClose={() => {
                        toggleAddExpenseModalOpen(false);
                    }}
                    contentLabel="Example Modal"
                >
                    <div class="d-flex">
                    <a
                        onClick={() => toggleAddExpenseModalOpen(false)}
                        role="button"
                        href="#"
                        className="nav-button"
                    ></a>
                    <a
                        role="button"
                        href="#"
                        className="nav-button"
                    ></a>
                    <a
                        role="button"
                        href="#"
                        className="nav-button"
                    ></a>
                    </div>
                    <div className="full-width mt-1 flex-column d-flex modal-body">
                    <div class="d-flex flex-row">
                            <p className="ml-1 mt-1 mr-2 c-pastel font-weight-600">
                                Name:
                                </p>
                            <input type="text" className="input-pastel"/>
                        </div>
                        <div className="d-flex flex-row">
                            <p className="ml-1 mt-1 mr-1 c-pastel font-weight-600">Category:</p>
                            <select className="dropdown">
                                <option value={0}>Entertainment</option>
                                <option value={1}>Food</option>
                                <option value={2}>Drink</option>
                                <option value={3}>Pharmacy</option>
                            </select>
                        </div>
                        <div class="d-flex flex-row">
                            <p className="ml-1 mt-1 mr-1 c-pastel font-weight-600">
                                Amount:
                                </p>
                            <input type="text" className="input-pastel"/>
                        </div>
                        <div class="d-flex flex-row">
                            <p className="ml-1 mt-1 mr-1 c-pastel font-weight-600">
                                Date:
                                </p>
                            <input type="date" className="input-pastel"/>
                        </div>
                        <div class="d-flex flex-row">
                            <p className="ml-1 mt-1 mr-1 c-pastel font-weight-600">
                                Description:
                                </p>
                            <textarea></textarea>
                        </div>
                        <input type="file" ref={selectedFile} class="display-none" />
                        <div class="d-flex flex-row mb-1">
                            <p className="ml-1 mt-1 mr-1 c-pastel font-weight-600">
                                Image (optional):
                                </p>
                                <input type="button" value="Browse..." onClick={() => selectedFile.current.click()} />
                        </div>

                    </div>
                    <div class="d-flex flex-row mr-1" style={{
                        justifyContent: 'flex-end'
                    }}>
                            <button>
                                <FontAwesomeIcon color={PASTEL_COLOR} icon={faPlusCircle}/>
                                <span className="ml-1">Add</span>
                            </button>
                        </div>
                </Modal>
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

export default MoneyLover;