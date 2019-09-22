import './index.css';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import Categories from '../data/Categories';
import Checkbox from './Checkbox';

const Emoji = () => {
    const [keywords, setKeyWords] = useState({
            'categories': [],
            'search': []
        }),

        [searchTerm, setSearchTerm] = useState(''),

        handleAddKeywords = (val, type) => {
            const newKeywords = {...keywords};
            if (type === 'categories') {
                if (newKeywords.categories.includes(val)) {
                    newKeywords.categories = newKeywords.categories.filter((keyword) => keyword !== val);
                } else {
                    newKeywords.categories.push(val);
                }
            } else if (type === 'search') {
                if (!newKeywords.search.includes(val)) {
                    newKeywords.search.unshift(val.trim());
                }
            }
            setKeyWords(newKeywords);
        },

        removeKeywords = (val, type) => {
            if (type === 'searchTerm') {
                setSearchTerm('');
            } else if (type === 'searchKeyword') {
                const newKeywords = {...keywords};
                newKeywords.search = newKeywords.search.filter((keyword) => keyword !== val);
                setKeyWords(newKeywords);
            } else if (type === 'searchCategories') {
                const newKeywords = {...keywords};
                newKeywords.categories = newKeywords.categories.filter((keyword) => keyword !== val);
                setKeyWords(newKeywords);
            }
        },

        handleSearchSubmit = (event, val) => {
            event.preventDefault();
            handleAddKeywords(val, 'search');
            setSearchTerm('');
        },

        handleSearchTermChange = (event) => {
            setSearchTerm(event.target.value);
        };

    return (
        <div id="emoji-container">
            <div id="categories-wrapper">
                {
                    Object.keys(Categories).map((val, index) =>
                        <label className="label-wrapper" key={index} >
                            <Checkbox
                                checked={keywords.categories.includes(val)}
                                onChange={() => handleAddKeywords(val, 'categories')}
                            />
                            <span className="label-text">
                                {val}
                            </span>
                        </label>)
                }
            </div>
            <div id="emoji-wrapper">
                <form
                    className="search-wrapper"
                    onSubmit={(event) => handleSearchSubmit(event, searchTerm)}
                >
                    <input
                        className="search-input"
                        onChange={handleSearchTermChange}
                        placeholder="Search Emojis!"
                        type="text"
                        value={searchTerm}
                    />
                    <button
                        className="submit-btn"
                        type="submit"
                    >
                        <FontAwesomeIcon
                            className="search-icon"
                            icon={faSearch}
                        />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Emoji;
