import React, { Fragment } from 'react';
import loader from './loader.gif';

const Loader = () => (
  <Fragment>
    <img
      src={loader}
      alt='loading...'
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        borderRadius: '50%',
      }}
    />
  </Fragment>
);

export default Loader;
