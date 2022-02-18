import "./css/index.css";
import { useDispatch } from "react-redux";
import { toggleItemPreview } from "../../features/slice";
import TextTruncate from "react-text-truncate";

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
        <div className="app-title full-width d-flex-center">
          <i className="fas fa-cookie mr-1"></i>
          <TextTruncate
            line={1}
            element="span"
            truncateText="..."
            text={selectedItem.name}
          />
        </div>
      </div>
      <div className="preview-item-menu-image d-flex-center mt-1">
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
