import React, { Component } from 'react';
import '../index.css';

class List extends Component {
    static defaultProps = {
        data: [],
    }

    state = {
        data2: [],
        name: '',
        number: '',
    }

    delete = (id) => {
        const { onDelete } = this.props;
        onDelete(id);
    }

    update = (id) => {
        const { onUpdate, data } = this.props;
        const { data2 } = this.state;

        console.log('b', data2);

        // this.setState({
        //   data2: data.map(
        //       item => item.id === id
        //         ? { ...item, name: item.name, number: item.number, }
        //         : { ...item }
        //     )
        // })
        // console.log('a', data2);

        onUpdate(id);
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps)
    //     console.log(prevState)
    //     const { data } = prevProps;
    //     const { data2 } = this.state;

    //     this.setState({
    //         data2: data,
    //       })

    //     console.log('c', data2);
    // }

    render() {
        const { data } = this.props;
        const { data2 } = this.state;
        console.log('r', data2);
        const plist = data.map((items) => (
            <div className="box">
                { items.updating
                    ? (
                        <>
                            <input type="text" name="name" onChange={this.inputChange} value={data2.name} />
                            <input type="text" name="number" onChange={this.inputChange} value={data2.number} />
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