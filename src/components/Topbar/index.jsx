import NavButtons from "./NavButtons";
import Title from "./Title";

const Topbar = () => {
    return (
        <div style={{'display': 'flex'}}>
            <NavButtons/>
            <Title/>
        </div>
    );
};

export default Topbar;