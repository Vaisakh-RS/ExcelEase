// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
    return (
        <div>
            <div>
                <p>---------------------</p>

                <h5>Card </h5>
                <p>============</p>

                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <br />
                        <h2>{key}</h2>
                        <input type="text" value={value} />
                    </div>
                ))}
                <p>---------------------</p>
            </div>
        </div>
    );
};

export default Card;
