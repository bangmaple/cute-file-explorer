import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../../features/slice';
import { RefSelectedItemContext } from '../../Context';
import './css/index.css';

const MainMenu = () => {

  const refSelectedItem = useContext(RefSelectedItemContext);
  const itemEditing = useSelector((state) => state.itemEditing);
  console.log(itemEditing);
  const menuItems = useSelector((state) => state.menuItems);
  const dispatch = useDispatch();

  const RenderIconByType = ({type}) => {
    return <i className={`c-pastel font-2r fas fa-${type === 'folder'
      ? 'folder'
      : 'file'}`}></i>;
  }

  const RenderSelectedItem = ({item}) => {
    return (
      <div className="d-flex">
        <RenderIconByType type={item.type}/>
        <input value={item.name} autoFocus id={item.id} href="#" className="item-editing"/>
      </div>
    );
  }

  const RenderItem = ({item}) => {
      return (
        <a ref={refSelectedItem} onBlur={() => {
          //setSelectedItem(undefined);
        }} onFocus={(e) => {
          dispatch(setSelectedItem(menuItems[e.target.id]));
        }} id={item.id} href="#" className="item">
         <RenderIconByType type={item.type}/>
         <span style={{'margin-left': '1rem'}}>{item.name}</span>
       </a>
      );
  };

    return (
        <div className="table" style={{'border-right': '1px solid var(--pastel-color)'}}>
          {menuItems.map((item) => 
              itemEditing
              ? <RenderSelectedItem item={item}/>
              : <RenderItem item={item}/>
          )}
        </div>
    );
};

export default MainMenu;