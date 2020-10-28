import React, { Component } from 'react';
import '../index.css';

class List extends Component {
    static defaultProps = {
        data: [],
    }
    render() {
        const { data } = this.props;
        console.log(data);
        const plist = data.map((items) => (
            <div className="box">
                <p>{items.name}</p>
                <span>{items.number}</span>
            </div>
        ))

        return (
            <div className="wrap">
                {plist}
            </div>
        )
    }
}

export default List;