import './css/Navigation.css';

const Navigation = () => {
    return (
        <div style={{ 'display': "flex"}}>
            <div className="app-back-forward-button">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="app-back-forward-button">
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    );
};

export default Navigation;