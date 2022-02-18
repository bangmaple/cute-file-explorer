import "./css/index.css";
import { useDispatch } from "react-redux";
import { toggleItemPreview } from "../../features/slice";

const PreviewMenu = ({ selectedItem }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="toggleIn preview-item-menu position-relative
         d-flex flex-column bg-white"
    >
      <div className="d-flex">
        <div className="d-flex">
          <a
            onClick={() => dispatch(toggleItemPreview())}
            href="#"
            className="nav-button"
          ></a>
          <a href="#" className="nav-button"></a>
          <a href="#" className="nav-button"></a>
        </div>
        <div className="app-title">
          <i className="fas fa-cookie mr-1"></i>
          {selectedItem.name}
        </div>
      </div>
      <div className="preview-item-menu-image d-flex-center full-height mt-1">
        <img
          alt={selectedItem.name}
          src={selectedItem.image}
          className="preview-item-menu-image-size position-absolute"
        />
      </div>
    </div>
  );
};

export default PreviewMenu;