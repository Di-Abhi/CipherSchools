import { Component } from "react";

class TodoScreen extends Component{
    state={
        taskCount: 0,
    }
    
    render(){
        return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                    <button 
                    onClick={(e)=>{
                        this.setState({
                            ...this.state, 
                            taskCount: this.state.taskCount+1
                        })
                        console.log(this.state.taskCount);
                    }} className="ui secondary button">Add Task</button>
                    <p>The count of button was clicked: {this.state.taskCount}</p>
                </div>
            </div>
        )
    }
}

export default TodoScreen;