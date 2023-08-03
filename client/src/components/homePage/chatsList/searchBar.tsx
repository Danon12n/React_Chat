import { FC, useState } from 'react';
import './searchBar.scss';

const SearchBar: FC = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="searchBar">
            <input
                className="searchBar__input"
                id="searchBarInput"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                type="text"
                placeholder="Поиск"
            />
        </div>
    );
};
export { SearchBar };
