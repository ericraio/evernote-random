import React, { Component } from 'react'
//import classnames from 'classnames'
//import './style.css'

//const { fetchCred, j } = require('../../../config/config')

export default class Notebook extends Component {
  handleClick = () => {
    this.props.notebookChanged(this.props.guid);
  }

  render() {
    const { name } = this.props
    return (
      <button onClick={this.handleClick}>
      { name }
      </button>
    )
  }
}
