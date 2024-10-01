import React from 'react';
import { Button } from 'react-bootstrap';


const CloseButton = (props:any) => {
    return (
        <div className="close">
            <Button onClick={() => props.closeAction()}>X</Button>
        </div>
    );
}

export default CloseButton;