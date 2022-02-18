import Filtering from "./Filtering";
import Navigation from "./Navigation";
import Sorting from "./Sorting";
import "./css/index.css";

const Toolbar = () => {
  return (
    <div className="toolbar d-flex">
      <Navigation />
      <Sorting />
      <Filtering />
    </div>
  );
};

export default Toolbar;
