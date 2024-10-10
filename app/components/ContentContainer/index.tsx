'use client'
import React, { useEffect } from 'react';
import ErrorView from '../ErrorView';
import { useStateContext } from '../../../context/state';
import * as apis from '../../apis/Apis';
import { Container } from 'react-bootstrap';

const ContentContainer = (props: any) => {
    const { children } = props;
    const { state, dispatch } = useStateContext();

    useEffect(() => {
        apis.getAuth(dispatch);
    }, [dispatch])

    return (
        <React.Fragment>
            <Container fluid className="header_container">
                { children }
                { state.toggleErrorView && <ErrorView />}
            </Container>
        </React.Fragment>
    )
}

export default ContentContainer;