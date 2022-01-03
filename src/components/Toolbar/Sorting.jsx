const Sorting = () => {
    return (
        <div style={{ 'display': "flex", 'margin-top': '-0.1rem' }}>
            <div className="app-filter-button app-filter-button-left">
            <i style={{ fontSize: "1.5rem" }} className="fas fa-bars"></i>
            </div>
            <div className="app-filter-button app-filter-button-right">
            <i style={{ fontSize: "1.5rem" }} className="fas fa-th"></i>
            </div>
        </div>
    );
};

export default Sorting;