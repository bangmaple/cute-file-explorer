const MenuContextItem = ({icon, name}) => {
    return (
        <>
          <i className={`fas fa-${icon}`}></i>
          <span className="ml-1">
            {name}
          </span>
        </>
    );
};

export default MenuContextItem;