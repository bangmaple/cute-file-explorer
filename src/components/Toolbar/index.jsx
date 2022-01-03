import Filtering from "./Filtering";
import Navigation from "./Navigation";
import Sorting from "./Sorting";
import './css/index.css';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="left-toolbar">
                <Navigation/>
                <Sorting/>
            </div>
            <Filtering/>
      </div>
    );
};

export default Toolbar;