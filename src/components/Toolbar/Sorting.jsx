import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleListRendering } from "../../features/slice";
import './css/Sorting.css';

const Sorting = () => {

    const isListRendering = useSelector((state) => state.isListRendering);
    const dispatch = useDispatch();

    const dispatchToggleListRendering = (isListRendering) => {
        dispatch(toggleListRendering(isListRendering));
    };

    return (
        <div className="main-sorting-nav">
            <div onClick={() => dispatchToggleListRendering(true)}
                 className={`app-filter-button app-filter-button-left
                  ${isListRendering ? 'app-filter-button-selected' : ''}`}>
            <i className="fas fa-bars font-size-1-half"></i>
            </div>
            <div onClick={() => dispatchToggleListRendering(false)}
                className={`app-filter-button app-filter-button-right
                ${!isListRendering ? 'app-filter-button-selected' : ''}`}>
            <i className="fas fa-th font-size-1-half"></i>
            </div>
        </div>
    );
};

export default Sorting;