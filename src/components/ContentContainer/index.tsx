'use client'
import React, { useEffect } from 'react';
import ErrorView from '../ErrorView';
import { useStateContext } from '../../context/state';
import * as apis from '../../apis/Apis';

const ContentContainer = (props: any) => {
    const { children } = props;
    const { state, dispatch } = useStateContext();

    useEffect(() => {
        apis.getAuth(dispatch);
    }, [dispatch])

    return (
        <React.Fragment>
            { children }
            { state.toggleErrorView && <ErrorView />}
        </React.Fragment>
    )
}

export default ContentContainer;