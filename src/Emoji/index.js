import './index.css';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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
        },

        renderSelectionButtons = (currentSearchTerm, search, categories) => {
            return (
                <div className="selection-wrapper">
                    {
                        currentSearchTerm.trim() ?
                            <button className="selection-btn" onClick={() => removeKeywords(currentSearchTerm.trim(), 'searchTerm')}>
                                <span className="btn-text">{currentSearchTerm.trim()}</span>
                                <FontAwesomeIcon
                                    className="cancel-icon"
                                    icon={faTimesCircle}
                                />
                            </button>
                            :
                            null
                    }
                    {
                        search.map((select, index) => {
                            return (
                                <button className="selection-btn" onClick={() => removeKeywords(select, 'searchKeyword')}>
                                    <span className="btn-text">{select}</span>
                                    <FontAwesomeIcon
                                        className="cancel-icon"
                                        icon={faTimesCircle}
                                    />
                                </button>
                            );
                        })
                    }
                    {
                        categories.map((select, index) => {
                            return (
                                <button className="selection-btn" onClick={() => removeKeywords(select, 'searchCategories')}>
                                    <span className="btn-text">{select}</span>
                                    <FontAwesomeIcon
                                        className="cancel-icon"
                                        icon={faTimesCircle}
                                    />
                                </button>
                            );
                        })
                    }
                </div>
            );
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
                {renderSelectionButtons(searchTerm, keywords.search, keywords.categories)}
            </div>
        </div>
    );
};

export default Emoji;
