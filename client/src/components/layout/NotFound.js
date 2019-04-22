import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='not-found'>
    <h3 className='text-center'>
      <Link className='text-secondary' to='/'>
        Return to Home Page
      </Link>
    </h3>
  </div>
);
export default NotFound;
