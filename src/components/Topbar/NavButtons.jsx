import "./css/NavButtons.css";
import {useNavigate} from "react-router-dom";

const NavButtons = ({
  firstBtnAction = undefined,
  secondBtnAction = undefined,
  thirdBtnAction = undefined,
}) => {
    
    const navigate = useNavigate();
  return (
    <div className="d-flex">
      <a
        onClick={() => navigate("/")}
        role="button"
        href="#"
        className="nav-button"
      ></a>
      <a
        onClick={
          secondBtnAction !== undefined ? () => secondBtnAction() : <></>
        }
        role="button"
        href="#"
        className="nav-button"
      ></a>
      <a
        onClick={thirdBtnAction !== undefined ? () => thirdBtnAction() : <></>}
        role="button"
        href="#"
        className="nav-button"
      ></a>
    </div>
  );
};

export default NavButtons;
