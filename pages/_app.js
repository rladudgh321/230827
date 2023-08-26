import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store';

const App = ({Component}) => {
    return (
        <>
            <Head>
                <title>nodebird</title>
            </Head>
            <Component></Component>
        </>
    );
}

App.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);