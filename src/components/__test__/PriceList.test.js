import React from 'react'
import Ionicon from 'react-ionicons'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'

import { items, categoies } from '../../containers/Home'

const cid = items.map(item => {
  item.category = categoies[item.cid]
  return item
})

const props = {
  items: cid,
  onModify: jest.fn(),
  onDelete: jest.fn()
}
let wrapper
describe('test PriceList', () => {
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props}/>)
  })
  it('should render snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should render correct price items length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(props.items.length)
  })
  it('should render correct icon', () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
    expect(iconList.length).toEqual(3)
    expect(iconList.first().props().icon).toEqual(props.items[0].category.iconName)
  })
  it('should trigger the correct callback fn', () => {
    const firstItem = wrapper.find('.list-group-item').first()
    firstItem.find('a').first().simulate('click')
    expect(props.onModify).toHaveBeenCalledWith(props.items[0])
  })
})
