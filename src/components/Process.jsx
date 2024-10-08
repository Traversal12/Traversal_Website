import React from 'react';
import Cards from './Cards';

function Process() {
  return (
    <div className='container mx-auto'>
      <div className='mb-10 text-center mt-32'>
        <h1 className="text-5xl">Our Process</h1>
        <p className="text-lg my-5">Reliable process for achieving distinctiveness.</p>
      </div>
      <Cards />
    </div>
  );
}

export default Process;
