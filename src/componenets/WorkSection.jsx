import React from 'react';
import Card from './Card';

const WorkSection = () => {
  return (
    <div>
      <h3 className="text-uppercase text-center mx-auto my-4">How it works</h3>
      <div className="row">
        <div className="col-8 mx-auto row row-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;