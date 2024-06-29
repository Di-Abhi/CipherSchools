import { Component, useContext, useState } from "react";
import TodoScreen from "./screens/ToDoScreens";
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";




// class App extends Component{
//     render(){
//         return <TodoScreen/>
//     }
// }

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoScreen/>
    },
    {
        path: "/add-task",
        element: <AddTask/>
    }
])

const App = () => {
    

    
    return( 
        <TaskProvider>
    <RouterProvider router={router}/>
    </TaskProvider>
)
};

export default App;