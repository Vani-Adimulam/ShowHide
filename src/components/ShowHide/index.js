// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onClickFirst = () => {
    this.setState(PrevState => ({isFirst: !PrevState.isFirst}))
  }

  onClickLast = () => {
    this.setState(PrevState => ({isLast: !PrevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="App-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.onClickFirst}
            >
              Show/Hide FirstName
            </button>
            {isFirst && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickLast}
            >
              Show/Hide LastName
            </button>
            {isLast && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
