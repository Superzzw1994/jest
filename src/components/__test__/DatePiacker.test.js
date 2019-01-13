import React from 'react'
import { mount } from 'enzyme'
import DatePicker from '../DatePicker'

let props = {
  year: 2019,
  month: 1,
  onChange: jest.fn()
}

let wrapper 
describe('test DatePiack', () => {
  beforeEach(() => {
    wrapper = mount(<DatePicker {...props}/>)
  })
  it('should render to snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('render the correct year and month(default)', () => {
    const text = wrapper.find('.dropdown-toggle').first().text()
    expect(text).toEqual('2019年01月')
    expect(wrapper.find('.dropdown-menu').length).toEqual(0)
    expect(wrapper.state('isOpen')).toEqual(false)
    expect(wrapper.state('YearSelect')).toEqual(props.year)
    expect(wrapper.state('MonthSelect')).toEqual(props.month)
  })
  it('click', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(true)
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)
    expect(wrapper.find('.years_range .dropdown-item').length).toEqual(9)
    expect(wrapper.find('.months_range .dropdown-item').length).toEqual(12)
    expect(wrapper.find('.years_range .dropdown-item.active').text()).toEqual('2019 年')
    expect(wrapper.find('.months_range .dropdown-item.active').text()).toEqual('01 月')
    expect(wrapper.find('.years_range .dropdown-item').first().text()).toEqual(`${props.year-4} 年`)
    expect(wrapper.find('.years_range .dropdown-item').last().text()).toEqual(`${props.year+4} 年`)
  })
  it('click should trigger the right states change', () => {
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.years_range .dropdown-item').first().simulate('click')
    expect(wrapper.find('.years_range .dropdown-item').first().hasClass('active')).toEqual(true)
    expect(wrapper.state('YearSelect')).toEqual(2015)
    wrapper.find('.months_range .dropdown-item').first().simulate('click')
    expect(wrapper.state('isOpen')).toEqual(false)
    expect(props.onChange).toHaveBeenCalledWith(2015, 1)
  })
})