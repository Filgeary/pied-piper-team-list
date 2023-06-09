import React, { Component } from 'react'
// import styles from './SearchPanel.module.css'

class SearchPanel extends Component {
  state = {
    inputValue: '',
  }

  handleChangeInput = evt => {
    const value = evt.target.value
    this.setState({ inputValue: value })
    this.props.onChangeInput(value)
  }

  render() {
    const { inputValue } = this.state

    return (
      <input
        type='text'
        name='search'
        title='Search'
        className='form-control search-input'
        placeholder='Search Cool Guy'
        value={inputValue}
        onChange={this.handleChangeInput}
      />
    )
  }
}

export default SearchPanel
