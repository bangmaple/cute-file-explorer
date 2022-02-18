import "./css/NavButtons.css";

const NavButtons = ({
  firstBtnAction = undefined,
  secondBtnAction = undefined,
  thirdBtnAction = undefined,
}) => {
  return (
    <div className="d-flex">
      <a
        onClick={firstBtnAction !== undefined ? () => firstBtnAction() : <></>}
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
