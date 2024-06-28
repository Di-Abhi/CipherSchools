import { useState } from "react";
import Task from "../components/Task";


const TodoScreen =() => {
    const [taskList, setTaskList]=useState([]);
    return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div>
                    <button 
                        onClick={(e)=>{
                            setTaskList([...taskList, {
                                title: "Go to gym",
                                discription: "Going to gym is good for muscle growth."
                            }])
                        }}
                     className="ui secondary button">Add Task</button>
                {taskList.map((task) => <Task/>)}
                </div>
            </div>
        )
}

export default TodoScreen;