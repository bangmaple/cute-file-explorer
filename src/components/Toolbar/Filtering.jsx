import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSubMenuItems } from '../../features/slice';
import './css/Filtering.css';
const Filtering = () => {

    const [search, setSearch] = useState("");

    const menuItems = useSelector((state) => state.subMenuItems);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(search);
        dispatch(setSubMenuItems(search));
    }, [search, dispatch]);

    return (
        <div className="app-filtering" style={{'margin-right': '2rem'}}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="&#xf002;"/>
        </div>
    );
};

export default Filtering;