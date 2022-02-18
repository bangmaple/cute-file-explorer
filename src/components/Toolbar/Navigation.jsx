import "./css/Navigation.css";

const Navigation = () => {
  return (
    <div className="forward-buttons d-flex">
      <div className="app-back-forward-button text-white d-flex-center ml-1">
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="app-back-forward-button text-white d-flex-center ml-1">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Navigation;
