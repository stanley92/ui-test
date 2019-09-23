import './index.css';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Categories from '../data/Categories';
import EmojiList from '../data/EmojiList';

import Checkbox from '../components/Checkbox';
import SelectionButton from '../components/SelectionButton';

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

        renderSelectionButtons = (currentSearchTerm, search, categories) => (
            <div className="selection-wrapper">
                {
                    currentSearchTerm.trim() ?
                        <SelectionButton
                            icon={faTimesCircle}
                            iconClassName="cancel-icon"
                            onClick={() => removeKeywords(currentSearchTerm.trim(), 'searchTerm')}
                            searchTerm={currentSearchTerm.trim()}
                        />
                        :
                        null
                }
                {
                    search.map((select) => {
                        return (
                            <SelectionButton
                                icon={faTimesCircle}
                                iconClassName="cancel-icon"
                                onClick={() => removeKeywords(select, 'searchKeyword')}
                                searchTerm={select}
                            />
                        );
                    })
                }
                {
                    categories.map((select) => {
                        return (
                            <SelectionButton
                                icon={faTimesCircle}
                                iconClassName="cancel-icon"
                                onClick={() => removeKeywords(select, 'searchCategories')}
                                searchTerm={select}
                            />
                        );
                    })
                }
            </div>
        ),

        renderLeftPanel = () => (
            <div className="left-panel">
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
            </div>
        ),

        renderSearch = () => (
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
        ),

        renderEmojis = () => {
            let emojiToDisplay = EmojiList;

            if (searchTerm) {
                emojiToDisplay = emojiToDisplay.filter((val) => val.keywords.includes(searchTerm.toLowerCase()) || val.title.includes(searchTerm.toLowerCase()));
            }

            if (keywords.categories.length > 0) {
                for (const category of keywords.categories) {
                    emojiToDisplay = emojiToDisplay.filter((val) => {
                        for (const symbol of Categories[category]) {
                            if (
                                val.title.toLowerCase() === symbol.replace('_', ' ').toLowerCase() ||
                                val.title.toLowerCase() === symbol.replace('-', ' ').toLowerCase() ||
                                val.title.toLowerCase().includes(symbol.replace('_', ' ').toLowerCase()) ||
                                val.title.toLowerCase().includes(symbol.replace('-', ' ').toLowerCase())
                            ) {
                                return true;
                            }
                        }
                        return false;
                    });
                }
            }

            if (keywords.search.length > 0) {
                for (const search of keywords.search) {
                    emojiToDisplay = emojiToDisplay.filter((val) => (val.keywords.includes(search.toLowerCase()) || val.title.includes(search.toLowerCase())));
                }
            }

            return (
                <div id="emoji-wrapper">
                    <div className="count-wrapper">
                        {emojiToDisplay.length} Emojis
                    </div>
                    <div id="symbol-container">
                        {
                            emojiToDisplay.map((val) => {
                                return (
                                    <div className="symbol-wrapper">
                                        <div className="symbol">
                                            {val.symbol}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            );
        },

        renderRightPanel = () => (
            <div className="right-panel">
                {renderSearch()}
                {renderSelectionButtons(searchTerm, keywords.search, keywords.categories)}
                {renderEmojis()}
            </div>
        );

    return (
        <div id="emoji-container">
            {renderLeftPanel()}
            {renderRightPanel()}
        </div>
    );
};

export default Emoji;
