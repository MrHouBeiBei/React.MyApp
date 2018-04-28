
import React, { Component } from 'react';

class Welcome2 extends React.Component {

    //类构造函数
    constructor(props) {
        super(props)
    }

    render() {
      return (
          <div>
              <h1>Hello, {this.props.name}</h1>
          </div>
      )
    }
  }


export default Welcome2


// export const Welcome = function(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

