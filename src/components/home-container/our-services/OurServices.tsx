import React from 'react';
import './ourServices.scss';
import Services from './services/Services';
import Estimate from './estimate/Estimate';

const OurServices = () => {
  return (
    <div className='ourServices__container'>
      <Services />
      <Estimate />
    </div>
  );
};

export default OurServices;
