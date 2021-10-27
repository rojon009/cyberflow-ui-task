import React from 'react';
import {BsCardImage} from 'react-icons/bs';

const Card = () => {
  return (
    <div className="mb-3 text-center">
      <BsCardImage style={{width: '50px', height: '50px'}} />
      <h5>Benefit 1</h5>
      <p>Lorem ipsum, dolor sit amet dsfasd dfsaf Consequuntur corporis minus quidem ex totam amet?</p>
    </div>
  );
};

export default Card;