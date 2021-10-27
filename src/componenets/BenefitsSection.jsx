import React from 'react';
import Card from './Card';

const BenefitsSection = () => {
  return (
    <div style={{backgroundColor: "#EFEFEF"}}>
      <div className="row pt-4">
        <div className="col-11 col-md-7 mx-auto text-center">
          <h3 className="text-uppercase">Partner Benefits</h3>
          <p>Lorem ipsum dolor, sit adipisicing elit. Tenetur est libero, a vel et aliquid recusandae sint corporis doloribus dolores harum ipsam delectus alias natus! Esse molestiae dolore fugiat officia.</p>
        </div>
      </div>
      <div className="row">
        <div className=" col-8 mx-auto row row-cols-1 row-cols-md-3">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;