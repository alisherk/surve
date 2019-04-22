import React from 'react';
import Footer from './Footer'; 

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='d-flex justify-content-end'>
            <h3 className='text-white' style={{fontFamily:'cursive', margin: '80px 30px'}}> Rediscover your business </h3>
          </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
