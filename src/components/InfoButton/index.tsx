import React from 'react';
import { useStateContext } from '../../context/state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const InfoButton = () => {
	const { 
        setToggleProfile,
        setToggleSidebar 
    } = useStateContext();

    const toggleHandler = () => {
        setToggleSidebar(true);
        setToggleProfile(true);
    }

    return (
        <div className="info">
            <FontAwesomeIcon type="button" icon={faInfoCircle} onClick={() => toggleHandler()} />
		</div>
    );
}

export default InfoButton;