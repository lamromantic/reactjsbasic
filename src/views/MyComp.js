import React from 'react';
import ReactDOM from 'react-dom';

class MyComp extends React.Component{
    
    state = {
        firstName: '',
        lastName: '',
    }
    
    handleClick = () => {
        alert('click me');
    }
      
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('click me');
        event.preventDefault()
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" 
                           value={this.state.firstName}
                           onChange={(event) => this.handleChangeFirstName(event)}/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" 
                           value={this.state.lastName}
                           onChange={(event) => this.handleChangeLastName(event)}/><br/><br/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
            </>
        )
    }
}

export default MyComp;