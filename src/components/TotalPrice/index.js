import React, { Component } from 'react';
import PropsTypes from 'prop-types';
const TotalPrice = ({income, outcome}) => {
  return (
    <div className="row">
      <div className="col">
        <p className='income'>收入:<span>{income}</span></p>
      </div>
      <div className="col">
        <p className='outcome'>支出:<span>{outcome}</span></p>
      </div>
    </div>
  )
}
TotalPrice.propsTypes = {
  income: PropsTypes.number.isRequired,
  outcome: PropsTypes.number.isRequired
}
export default TotalPrice