import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { padLeft, range } from '../../util/util';
export default class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      YearSelect: this.props.year,
      MonthSelect: this.props.month
    }
  }
  showToggle = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  selectYear = (event, yearNumber) => {
    event.preventDefault()
    this.setState({
      YearSelect: yearNumber
    })
  }
  selectMonth = (event, monthNumber) => {
    event.preventDefault()
    this.setState({
      MonthSelect: monthNumber,
      isOpen: false
    })
    this.props.onChange(this.state.YearSelect, monthNumber)
  }
  render () {
    const { year, month } = this.props
    const { isOpen, YearSelect, MonthSelect } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(number => number + year)
    return (
      <div className="dropdown">
        <p>选择月份</p>
        <button className="btn btn-lg btn-secondary dropdown-toggle"
          onClick = {this.showToggle}
        >
          {`${YearSelect}年${padLeft(MonthSelect)}月`}
        </button>
        {isOpen && 
          <div className="dropdown-menu" style = {{display: 'block'}}>
            <div className="row">
              <div className="col border-right years_range">
                {yearRange.map((yearNumber, index ) => {
                  return (
                    <a href="#" 
                      key={index} 
                      className={(yearNumber === YearSelect) ? 'dropdown-item active' : 'dropdown-item'}
                      onClick = {(event) => {this.selectYear(event, yearNumber)}}
                      >
                      {yearNumber} 年
                    </a>
                  )
                })}
              </div>
              <div className="col months_range">
                {monthRange.map((monthNumber, index ) => {
                  return (
                    <a href="#" 
                      key={index} 
                      className={(monthNumber === MonthSelect) ? 'dropdown-item active' : 'dropdown-item'}
                      onClick = {(event) => {this.selectMonth(event, monthNumber)}}
                      >
                      {padLeft(monthNumber)} 月
                    </a>
                  )
                })}                
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
DatePicker.propTypes = {
  year: Proptypes.number.isRequired,
  month: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired
}