import { useSelector } from "react-redux";
import {
  DEFAULT_DESCRIPTION_IMAGE,
  DEFAULT_DESCRIPTION_TEXT,
} from "../../constants/constant";
import "./css/index.css";

const DescriptionMenu = () => {
  const selectedItem = useSelector((state) => state.selectedItem);

  return (
    <div className="description-menu">
      <img
        alt="Description"
        className="description-menu-image"
        src={selectedItem ? selectedItem.image : DEFAULT_DESCRIPTION_IMAGE}
      />
      <p className="description-menu-image-text">
        {selectedItem ? selectedItem.name : DEFAULT_DESCRIPTION_TEXT}
      </p>
    </div>
  );
};

export default DescriptionMenu;
