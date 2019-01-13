import React, { Component } from 'react';
import PropsTypes from 'prop-types';
const TotalPrice = ({income, outcome}) => {
  return (
    <div className="row">
      <div className="col">
        <p>收入:{income}</p>
      </div>
      <div className="col">
        <p>支出:{outcome}</p>
      </div>
    </div>
  )
}
TotalPrice.propsTypes = {
  income: PropsTypes.number.isRequired,
  outcome: PropsTypes.number.isRequired
}
export default TotalPrice