import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../../util/util'
const currentClass = (current, view) => {
  return (current === view) ? 'nav-link active' : 'nav-link'
}
const ViewTab = ({activeTab, onTabChange}) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a href="#" className={currentClass(activeTab, LIST_VIEW)}
          onClick = {(event) => {
            event.preventDefault();
            onTabChange(LIST_VIEW)
          }}
        >
          <Ionicon 
            className="rounded-circle" 
            fontSize="25px"  
            color={'#007bff'} 
            icon='ios-paper'>
          </Ionicon>
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a href="#" className={currentClass(activeTab, CHART_VIEW)}
          onClick = {(event) => {
            event.preventDefault();
            onTabChange(CHART_VIEW)
          }}
        >
          <Ionicon 
            className="rounded-circle" 
            fontSize="25px"  
            color={'#007bff'} 
            icon='ios-pie'>
          </Ionicon>
          图表模式
        </a>
      </li>
    </ul>
  )
}
ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}
export default ViewTab