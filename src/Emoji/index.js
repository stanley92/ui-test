import './index.css';

import React, {useState} from 'react';

import Categories from '../data/Categories';
import Checkbox from './Checkbox';

const Emoji = () => {
    const [keywords, setKeyWords] = useState({
            'categories': [],
            'search': []
        }),
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
            </div>
        </div>
    );
};

export default Emoji;
