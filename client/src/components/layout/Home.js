import React from 'react';
import Footer from './Footer'; 

const Home = () => {
  return (
    <div>
      <div className='main'>
        <div className='d-flex flex-row-reverse'>
            <h3 className='text-white order-3 p-2' style={{margin:'40px 20px', fontFamily:'cursive'}}> Rediscover your business </h3>
          </div>
      </div>
      <Footer /> 
    </div>
  );
};

export default Home;
