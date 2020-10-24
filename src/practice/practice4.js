import React, { Component } from 'react';
import '../index.css';

class Cycle2 extends Component {
    id = 2;

  state = {
    array: [1]
  };

  handleInsert = () => {
    this.setState({
      array: [this.id++, ...this.state.array]
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.array !== this.state.array) {
      const { scrollTop, scrollHeight } = this.list;

      return {
        scrollTop,
        scrollHeight
      };
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      const { scrollTop } = this.list;
      if (scrollTop !== snapshot.scrollTop) return;
      const diff = this.list.scrollHeight - snapshot.scrollHeight;
      this.list.scrollTop += diff;
    }
  }

  render() {
    const rows = this.state.array.map((number) => (
      <div className="row" key={number}>
        {number}
      </div>
    ));

    return (
      <div>
        <div
          ref={(ref) => {
            this.list = ref;
          }}
          className="list"
        >
          {rows}
        </div>
        <button onClick={this.handleInsert}>Click Me</button>
      </div>
    );
  }
}

export default Cycle2;