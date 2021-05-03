import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Container = (props: any) => {
    const { children } = props;

    return (
        <div className="container col-xs-12" id="content_wrap">
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Container;