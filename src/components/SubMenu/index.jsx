import './css/index.css';

const subMenuItems = [
    "Madeleine",
    "Pancake",
    "Chai Tea Latte",
    "Pastel Macarons",
    "Creme Brulee",
   // "Iced Americano",
   // "Coconut Smoothie",
    //"Lemon Pound Cake",
   // "Cream Cheese Muffin",
   // "Espresso",
];

const MenuItemIcon = (props) => {
    return (
        <div className="menu-table-item-icon">
            <i className={`fas fa-${props.name}`}></i>
        </div>
    )
}

const SubMenu = () => {
    return (
        <div style={{'width': '650px', 'border-right': '1px solid var(--pastel-color)'}}>
        {
            subMenuItems.map((item) => 
                <a href="#" className="item">
                    <MenuItemIcon name={'cookie'}/>
                    <span style={{'margin-left': '1rem'}}>
                        {item}
                    </span>
                </a>
            )
        }
        </div>
    );
};

export default SubMenu;