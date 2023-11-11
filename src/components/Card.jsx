import { useParams } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    const params = useParams();
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
            <div>
                <h5 className="text-2xl font-semibold mb-10">
                    Card {params.id}
                </h5>
                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="mb-4 flex items-center">
                        <div className="w-1/3">
                            <h2 className="text-lg font-semibold mb-1">
                                {key}
                            </h2>
                        </div>
                        <div className="w-2/3">
                            <input
                                type="text"
                                value={value}
                                onChange={() => {}}
                                className="w-1/2 p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                ))}
                <button>Edit</button>
            </div>
        </div>
    );
};

export default Card;
