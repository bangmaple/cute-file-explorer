import { useDispatch, useSelector } from "react-redux";
import "./css/index.css";
import TextTruncate from "react-text-truncate"; // recommend
import { setSelectedItem, toggleItemPreview } from "../../features/slice";

const MenuItemIcon = (props) => {
  return (
    <div className="menu-table-item-icon">
      <i className={`fas fa-${props.name}`}></i>
    </div>
  );
};

const SubMenu = () => {
  const isListRendering = useSelector((state) => state.isListRendering);
  const isItemPreviewed = useSelector((state) => state.isItemPreviewed);
  const selectedItem = useSelector((state) => state.selectedItem);
  const subMenuItems = useSelector((state) => state.subMenuItems);
  const dispatch = useDispatch();

  const RenderAsList = () => {
    return subMenuItems.map((item) => (
      <a key={item.id}
        onFocus={() => dispatch(setSelectedItem(item))}
        href="#"
        className="item"
      >
        <MenuItemIcon name={"cookie"} />
        <span className="ml-1">{item.name}</span>
      </a>
    ));
  };

  const RenderAsGrid = () => {
    return (
      <div class="d-flex flex-wrap">
        {subMenuItems.map((item) => (
          <a
            key={item.id}
            onFocus={() => dispatch(setSelectedItem(item))}
            href="#"
            className="item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "155px",
            }}
          >
            <MenuItemIcon
              onClick={() => dispatch(setSelectedItem(item))}
              name={"cookie"}
            />
            <span
              onClick={() => dispatch(setSelectedItem(item))}
              className="text-align-center"
            >
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={item.name}
              />
            </span>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ position: "relative" }}
        className={`sub-menu sub-scrollbar ${
          !isListRendering ? "toggleIn" : ""
        }`}
      >
        {isListRendering ? <RenderAsList /> : <RenderAsGrid />}
      </div>
      {isItemPreviewed ? (
        <div className="toggleIn preview-item-menu">
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div
                className="nav-button"
                onClick={() => dispatch(toggleItemPreview())}
              ></div>
              <div className="nav-button"></div>
              <div className="nav-button"></div>
            </div>
            <div className="app-title">
              <i
                className="fas fa-cookie mr-1"
              ></i>
              {selectedItem.name}
            </div>
          </div>
          <div className="preview-item-menu-image">
            <img
              alt={selectedItem.name}
              className="preview-item-menu-image-size"
              style={{ position: "absolute" }}
              src={selectedItem.image}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubMenu;
