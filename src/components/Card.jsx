const Card = ({ data }) => {
    return (
        <div>
            <h3>Card</h3>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Card;
