import React from 'react'
import { shallow } from 'enzyme'
import TotalPrice from '../TotalPrice'

const props = {
  income: 1000,
  outcome: 2000
}


describe('test TotalPrice component', () => {
  it('component should render correct props', () => {
    const wrapper = shallow(<TotalPrice {...props}/>)
    expect(wrapper.find('.income span').text() * 1).toEqual(props.income)
    expect(wrapper.find('.outcome span').text() * 1).toEqual(props.outcome)
  })
})