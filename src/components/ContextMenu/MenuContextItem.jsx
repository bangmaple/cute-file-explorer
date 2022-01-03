const MenuContextItem = ({icon, name}) => {
    return (
        <>
          <i className={`fas fa-${icon}`}></i>
          <span style={{'margin-left': '0.5rem'}}>
            {name}
          </span>
        </>
    );
};

export default MenuContextItem;