import React from "react";

class AddComp extends React.Component{
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('>>> check data input: ', this.state)
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert("fill in the blank");
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">
                    <label htmlFor="fname">Title Job:</label><br/>
                    <input 
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                    /><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input 
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} 
                    /><br/><br/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
        )
    }
}

export default AddComp