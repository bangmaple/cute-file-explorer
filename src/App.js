import './App.css';
import SubMenu from './components/SubMenu';
import MainMenu from './components/MainMenu';
import Toolbar from './components/Toolbar';
import { useContextMenu } from 'react-contexify';
import ContextMenu from './components/ContextMenu';
import Topbar from './components/Topbar';
import './lib.css';
import DescriptionMenu from './components/DescriptionMenu';

const MENU_ID = '1';

function App() {

  const { show } = useContextMenu({
    id: MENU_ID,
  });;
  
    function handleContextMenu(e) {
      e.preventDefault();
      show(e, {
        props: {
          key: "value",
        },
      });
    };

  return (
    <div className="main bg-white">
      <Topbar/>
      <Toolbar/>
      <div onDoubleClick={handleContextMenu}
       onContextMenu={handleContextMenu}
        className="menu">
        <ContextMenu MENU_ID={MENU_ID}/>
        <MainMenu/>
        <SubMenu/>
        <DescriptionMenu/>
      </div>
    </div>
  );
}

export default App;
