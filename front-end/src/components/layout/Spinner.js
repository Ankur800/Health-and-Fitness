import React, { Fragment } from 'react';

const Spinner = () => {
    return (
        <Fragment>
            <img
                src='./images/loading.svg'
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt='Loading...'
            />
        </Fragment>
    );
};

export default Spinner;
