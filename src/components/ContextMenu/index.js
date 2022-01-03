import {Item, Menu, Separator, Submenu} from 'react-contexify';
import "react-contexify/dist/ReactContexify.css";
import MenuContextItem from './MenuContextItem';
import './css/index.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeMenuItemById, setEditingItem, setMenuItems } from '../../features/slice';

const ContextMenu = ({MENU_ID}) => {

    const selectedItem = useSelector((state) => state.selectedItem);
    const menuItems = useSelector((state) => state.menuItems);
    const dispatch = useDispatch();


    const handleItemClick = ({event, props }) => console.log(event,props);


    return (
        <Menu id={MENU_ID} theme="light">
        <Item onClick={({event, props}) => {
            dispatch(setMenuItems([...menuItems, {
                id: menuItems[menuItems.length - 1].id + 1,
                name: 'New Item',
                type: 'file',
            }]));
        }}>
          <MenuContextItem icon="file" name="New Item"/>
        </Item>
        <Item onClick={({event, props}) => {
            dispatch(setMenuItems([...menuItems, {
                id: menuItems[menuItems.length - 1].id + 1,
                name: 'New Folder',
                type: 'folder',
            }]));
        }}>
          <MenuContextItem icon="folder-plus" name="New Folder"/>
        </Item>
        <Separator />
        <Item disabled={selectedItem === undefined} onClick={({event, props}) => {
        
        dispatch(setEditingItem(selectedItem.id));
        }}>
          <MenuContextItem icon="pencil" name="Rename"/>
        </Item>
    <Item disabled={selectedItem === undefined} onClick={({event, props}) => {
        dispatch(removeMenuItemById(selectedItem.id));
    }}>
      <MenuContextItem icon="trash" name="Delete"/>
    </Item>
        <Item onClick={handleItemClick}>
          <MenuContextItem icon="check-double" name="Select All"/>
        </Item>
        <Separator />
        <Submenu label={<MenuContextItem icon="map-pin" name="Assign Tag"/>}>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="apple-alt" name="Apple"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="pizza-slice" name="Pizza"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="hamburger" name="Hamburger"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="egg" name="Egg"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="fish" name="Fish"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="comment-dots" name="More..."/>
          </Item>
        </Submenu>
        <Separator />
        <Item disabled>Disabled</Item>
        <Separator />
        <Submenu label={<MenuContextItem icon="sort-alpha-up" name="Sort by"/>}>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="file-signature" name="Name"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="hashtag" name="Kind"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="folder-plus" name="Date Added"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="folder-minus" name="Date Modified"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="folder-open" name="Date Last Opened"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="weight" name="Size"/>
          </Item>
          <Item onClick={handleItemClick}>
            <MenuContextItem icon="tags" name="Tags"/>
          </Item>
        </Submenu>
        <Separator />
        <Item onClick={handleItemClick}>
          <MenuContextItem icon="question-circle" name="Help"/>
        </Item>
      </Menu>
    );
};

export default ContextMenu;