import React from 'react';
import ReactDOM from 'react-dom';

class MyComp extends React.Component{
    
    state = {
        name: 'Lam',
        class: '6',
    }
    
    handleClick = () => {
        alert('click me');
    }
      
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my Component, my name is {this.state.name}
                </div>
                <div>
                    My class is {this.state.class}
                </div>
                <button onClick={() => this.handleClick()}>
                    Click me
                </button>
            </>
        )
    }
}

export default MyComp;