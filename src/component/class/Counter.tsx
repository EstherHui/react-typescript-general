import React, { Component } from 'react'
//step 1 : define props
type CountProps = { 
    message : string,
}

type CountState = {
    count : number,
}

//connect type with counter Component
export class Counter extends Component <CountProps, CountState> {

    state ={
        count : 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Increment </button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}



