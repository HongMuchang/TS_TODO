import React,{useState} from 'react';
import './App.css';
import TaskList from "./components/TaskList";
import  TaskInput  from "./components/TaskInput";
import { Task } from './Types';

const initialState: Task[] = [
  {
    id: 1,
    title: '1のTODO',
    done:false
  },
  {
    id: 2,
    title: '1のTODO',
    done:false
  }  
]

const App: React.FC = () => {

// TODOリスト
const [tasks,setTasks]=useState<Task[]>(initialState)
  
  
  return (
    <React.Fragment>
      <TaskInput
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}

      />
    </React.Fragment>
  );
}


export default App;
