import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorView = () => {
    return (
        <section className="error_view">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <p>
                <span className="opps">Opps!<br /></span>
                <span>Something went wrong.<br />Please try again.</span>
            </p>
		</section>
    );
}

export default ErrorView;