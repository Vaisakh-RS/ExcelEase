
const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Object Details</h5>
                <ul className="list-group">
                    {Object.entries(data).map(([key, value]) => (
                        <li key={key} className="list-group-item">
                            <h2>{key}</h2>
                            <br />
                            <input type="text" value={value} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
