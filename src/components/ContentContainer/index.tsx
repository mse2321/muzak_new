import React, { useEffect } from 'react';
import ErrorView from '../ErrorView';
import Header from '../Header';
import { useStateContext } from '../../context/state';

const ContentContainer = (props: any) => {
    const { children } = props;
    const { 
        getAuth, 
        showErrorView 
    } = useStateContext();

    useEffect(() => {
        getAuth();
    }, [getAuth]);

    return (
        <React.Fragment>
            <Header />
            { children }
            { showErrorView && <ErrorView />}
        </React.Fragment>
    )
}

export default ContentContainer;