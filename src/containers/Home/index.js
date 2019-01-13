import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from '../../components/PriceList';
import ViewTab from '../../components/ViewTab';
import TotalPrice from '../../components/TotalPrice';
import DatePicker from '../../components/DatePicker';
import { ParseDate, LIST_VIEW, padLeft } from '../../util/util';
export const items = [
  {
    'id': 1,
    'title': 'travel',
    'price': 200,
    'data': '2019-01-19',
    'cid': '1'
  },
  {
    'id': 2,
    'title': 'travel',
    'price': 300,
    'data': '2018-10-19',
    'cid': '2'
  },
  {
    'id': 3,
    'title': 'travel',
    'price': 400,
    'data': '2018-12-19',
    'cid': '3'
  }
]
export const categoies = {
  '1': {
    'id': 1,
    'name': '旅行',
    'type': 'outcome',
    'iconName': 'ios-plane'
  },
  '2': {
    'id': 1,
    'name': '旅行',
    'type': 'outcome',
    'iconName': 'ios-plane'
  },
  '3': {
    'id': 1,
    'name': '旅行',
    'type': 'outcome',
    'iconName': 'ios-plane'
  }
}
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items,
      currentDate: ParseDate(),
      tabView: LIST_VIEW
    }
  }
  changeView = (view) => {
    this.setState({
      tabView: view
    })
  }
  changeDate = (year, month) => {
    this.setState({
      currentDate: {
        year,
        month
      }
    })
  }
  modifyItem = (target) => {
    const modify = this.state.items.map(item => {
      if (item.id === target.id) {
        return {...item, title: '更新啦'}
      } else {
        return item
      }
    })
    this.setState({
      items: modify
    })
  }
  createItem = () => {

  }
  deleteItem = (target) => {
    console.log(target)
    const filterItem = this.state.items.filter(item => item.id !== target.id)
    this.setState({
      items: filterItem
    })
  }
  render () {
    const { items, currentDate, tabView} = this.state
    const cid = items.map(item => {
      item.category = categoies[item.cid]
      return item
    }).filter(item => {
      return item.data.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <DatePicker year={currentDate.year} month={currentDate.month} onChange = {this.changeDate}></DatePicker>
          </div>
          <div className="col">
            <TotalPrice income={1000} outcome={500}></TotalPrice>
          </div>
        </div>
        <div className="content-area">
          <ViewTab activeTab={tabView} onTabChange={this.changeView}></ViewTab>
          {(this.state.tabView === LIST_VIEW) ? <PriceList items={cid} onModify={this.modifyItem} onDelete={this.deleteItem}></PriceList> : <h1>123</h1>}
        </div>
      </Fragment>
    )
  }
}