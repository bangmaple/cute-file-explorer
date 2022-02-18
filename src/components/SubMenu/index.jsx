import { useDispatch, useSelector } from "react-redux";
import "./css/index.css";
import TextTruncate from "react-text-truncate";
import { setSelectedItem } from "../../features/slice";
import PreviewMenu from "../PreviewMenu";

const MenuItemIcon = (props) => {
  return (
    <div className="menu-table-item-icon d-flex-center">
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
        className="item d-flex"
      >
        <MenuItemIcon name={"cookie"} />
        <span className="ml-1">{item.name}</span>
      </a>
    ));
  };

  const RenderAsGrid = () => {
    return (
      <div className="d-flex flex-wrap">
        {subMenuItems.map((item) => (
          <a
            key={item.id}
            onFocus={() => dispatch(setSelectedItem(item))}
            href="#"
            className="item-grid item d-flex-center flex-column"
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
    <div className="position-relative">
      <div className={`sub-menu sub-scrollbar ${
          !isListRendering ? "toggleIn" : ""
        }`}
      >
        {isListRendering ? <RenderAsList /> : <RenderAsGrid />}
      </div>
      {isItemPreviewed ? (
        <PreviewMenu selectedItem={selectedItem}></PreviewMenu>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubMenu;
