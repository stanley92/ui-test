import './selectionButton.css';

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SelectionButton = ({searchTerm, iconClassName, icon, onClick}) => (
    <button className="selection-btn" onClick={onClick}>
        <span className="btn-text">{searchTerm}</span>
        <FontAwesomeIcon
            className={iconClassName}
            icon={icon}
        />
    </button>
);

export default SelectionButton;
