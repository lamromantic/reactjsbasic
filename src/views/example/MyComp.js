import React from 'react';
import ReactDOM from 'react-dom';
import AddComp from './AddComp';
import ChildComp from './ChildComp';

class MyComp extends React.Component{
    state = {
        arrJobs: [
            {id: 'job1', title: 'dev', salary: '5k$'},
            {id: 'job2', title: 'test', salary: '3k$'},
            {id: 'job3', title: 'pm', salary: '10k$'},
        ],
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    render() {
        return (
            <>
                <AddComp addNewJob={this.addNewJob} />
                <ChildComp arrJobs = {this.state.arrJobs} />                   
            </>
        )
    }
}



export default MyComp;