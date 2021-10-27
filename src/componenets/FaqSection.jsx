import React from 'react';
import AccordionList from './AccordionList';

const FaqSection = () => {
  return (
    <div style={{backgroundColor: "#EFEFEF"}}>
      <h3 className="text-uppercase text-center mx-auto py-5">Faq's</h3>

      <div className="row">
        <div className="col-9 mx-auto">
          <AccordionList />
          <button className="btn btn-primary mx-auto d-block my-5 px-5">Host with Us</button>
        </div>
      </div>


    </div>
  );
};

export default FaqSection;