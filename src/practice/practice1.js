import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: 'defaultName'
  }
  render() {
    return (
      <div>
        Hi! {this.props.name}
      </div>
    )
  };
}

export default MyName;
