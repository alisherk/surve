import React from 'react';

const Services = () => {
  return (
    <section>
      <div className='container'>
        <div className='row' style={{height:'100px'}}>
          <div className='col-md-12 text-center'>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-plane fa-stack-2x text-dark' />
              <i className='fas fa-shopping-cart fa-stack-1x fa-inverse' />
            </span>
            <h4 className='service-heading'>Travel services</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-danger' />
              <i className='fas fa-car fa-stack-1x fa-inverse' />
            </span>
            <h4 className='service-heading'>Transporation</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni,
              impedit.
            </p>
          </div>
          <div className='col-md-4'>
            <span className='fa-stack fa-4x'>
              <i className='fas fa-circle fa-stack-2x text-dark' />
              <i className='fas fa-hotel fa-stack-1x fa-inverse' />
            </span>
            <h4 className='service-heading'>Accomodation</h4>
            <p className='text-muted'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
