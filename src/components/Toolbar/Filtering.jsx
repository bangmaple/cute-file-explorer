import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCHING_TIMEOUT } from "../../constants/constant";
import { setSubMenuItems } from "../../features/slice";
import "./css/Filtering.css";

const Filtering = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setSubMenuItems(search));
    }, SEARCHING_TIMEOUT);
  }, [search, dispatch]);

  const dispatchSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app-filtering mr-2">
      <input onChange={dispatchSearch} type="text" placeholder="&#xf002;" />
    </div>
  );
};

export default Filtering;
