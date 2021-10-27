import React from 'react';
import AccordionItem from './AccordionItem';

const AccordionList = () => {
  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <AccordionItem id="1" />
      <AccordionItem id="2" />
      <AccordionItem id="3" />
      <AccordionItem id="4" />
      <AccordionItem id="5" />
    </div>
  );
};

export default AccordionList;