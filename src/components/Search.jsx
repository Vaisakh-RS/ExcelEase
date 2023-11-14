import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/search.css';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/data/${searchValue}`);
    };
    return (
        <div className="sBox">
            <input
                placeholder="select by row"
                className="searchF"
                type="number"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
                className="border border-gray-500 hover:border-violet-500 px-2 py-1 rounded transition duration-300 ease-in-out btnS"
                type="button"
                onClick={handleSearch}
            >
                SEARCH
            </button>
        </div>
    );
};

export default Search;
