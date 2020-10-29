import React, { Component } from 'react';
import '../index.css';

class List extends Component {
    static defaultProps = {
        data: [],
    }

    state = {
        name: '',
        number: '',
    }

    delete = (id) => {
        const { onDelete } = this.props;
        onDelete(id);
    }

    update = (id) => {
        const { onUpdate } = this.props;
        onUpdate(id);
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { data } = this.props;
        const plist = data.map((items) => (
            <div className="box">
                { items.updating
                    ? (
                        <>
                            <input type="text" name="name" onChange={this.inputChange} value={items.name} />
                            <input type="text" name="number" onChange={this.inputChange} value={items.number} />
                        </>
                    )
                    : (
                        <>
                            <p>{items.name}</p>
                            <span>{items.number}</span>
                        </>
                      ) 
                }
                <button onClick={() => this.delete(items.id) }>delete {items.id}</button>
                <button onClick={() => this.update(items.id) }>update</button>
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