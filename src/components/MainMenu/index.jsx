import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../../features/slice';
import './css/index.css';

const MainMenu = () => {

  const itemEditing = useSelector((state) => state.itemEditing);
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
        <a href="javascript:;" onBlur={() => {
          //setSelectedItem(undefined);
        }} onFocus={(e) => {
          dispatch(setSelectedItem(menuItems[e.target.id]));
        }} id={item.id} className="item">
         <RenderIconByType type={item.type}/>
         <span className="ml-1">{item.name}</span>
       </a>
      );
  };

    return (
        <div className="table border-right-1px-pastel-color">
          {menuItems.map((item) => 
              itemEditing
              ? <RenderSelectedItem item={item}/>
              : <RenderItem item={item}/>
          )}
        </div>
    );
};

export default MainMenu;