import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const ContentContainer = (props: any) => {
    const { children } = props;

    return (
        <React.Fragment>
            <Header />
            { children }
            <Footer />
        </React.Fragment>
    )
}

export default ContentContainer;