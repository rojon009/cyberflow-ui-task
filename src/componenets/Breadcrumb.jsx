import React from 'react';

const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item "><a className="text-white" href="/">Home</a></li>
        <li className="breadcrumb-item text-white active" aria-current="page">Library</li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;