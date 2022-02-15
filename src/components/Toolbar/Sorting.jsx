import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleListRendering } from "../../features/slice";

const Sorting = () => {

    const isListRendering = useSelector((state) => state.isListRendering);
    const dispatch = useDispatch();

    return (
        <div className="main-sorting-nav">
            <div onClick={isListRendering 
                ? () => {} 
                : () => dispatch(toggleListRendering())}
                 className={`app-filter-button app-filter-button-left
                  ${isListRendering ? 'app-filter-button-selected' : ''}`}>
            <i style={{ fontSize: "1.5rem" }} className="fas fa-bars"></i>
            </div>
            <div onClick={!isListRendering 
                ? () => {} 
                : () => dispatch(toggleListRendering())}
                className={`app-filter-button app-filter-button-right
                ${!isListRendering ? 'app-filter-button-selected' : ''}`}>
            <i style={{ fontSize: "1.5rem" }} className="fas fa-th"></i>
            </div>
        </div>
    );
};

export default Sorting;