import React from 'react';

const AccordionItem = ({id}) => {
  return (
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id={`panelsStayOpen-heading${id}`}>
        <button className={`accordion-button ${id === '1' ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${id}`} aria-expanded={id === '1' ? true : false} aria-controls={`panelsStayOpen-collapse${id}`}>
          Accordion Item # {id}
        </button>
      </h2>
      <div id={`panelsStayOpen-collapse${id}`} className={`accordion-collapse collapse ${id === '1' ? 'show' : ''}`} aria-labelledby={`panelsStayOpen-heading${id}`}>
        <div className="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;