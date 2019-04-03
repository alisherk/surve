import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='footer-dark'>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6 col-md-3 item'>
                <h3>Services</h3>
                <ul>
                  <li>Technology</li>
                  <li>Research</li>
                  <li>Surveys</li>
                </ul>
              </div>
              <div className='col-sm-6 col-md-3 item'>
                <h3>About</h3>
                <ul>
                  <li>Company</li>
                  <li>Team</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className='col-md-6 item text'>
                <h3>Surve Inc</h3>
                <p>
                  We are a company who provide consulting, research and
                  technology services by giving you the state of the art
                  technology to conduct opinion research and market your
                  products according to that research
                </p>
              </div>
              <div className='col item social'>
                <span>
                  <i className='fa fa-facebook' />
                </span>

                <span>
                  <i className='fa fa-twitter' />
                </span>

                <span>
                  <i className='fa fa-instagram' />
                </span>
              </div>
            </div>
            <p className='copyright'>Surve Inc © 2019</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
