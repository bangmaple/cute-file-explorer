import './App.css';
import SubMenu from './components/SubMenu';
import MainMenu from './components/MainMenu';
import DescriptionMenu from './components/DescriptionMenu/DescriptionMenu';
import Toolbar from './components/Toolbar';
import { useContextMenu } from 'react-contexify';
import ContextMenu from './components/ContextMenu';
import Topbar from './components/Topbar';

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
    <div className="main">
      <Topbar/>
      <Toolbar/>
      <div onContextMenu={handleContextMenu} className="menu">
        <ContextMenu MENU_ID={MENU_ID}/>
        <MainMenu/>
        <SubMenu/>
        <DescriptionMenu/>
      </div>
    </div>
  );
}

export default App;
