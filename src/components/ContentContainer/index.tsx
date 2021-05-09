import React, { useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { useStateContext } from '../../context/state';

const ContentContainer = (props: any) => {
    const { children } = props;
    const { getAuth } = useStateContext();

    useEffect(() => {
        getAuth();
    }, []);

    return (
        <React.Fragment>
            <Header />
            { children }
            <Footer />
        </React.Fragment>
    )
}

export default ContentContainer;