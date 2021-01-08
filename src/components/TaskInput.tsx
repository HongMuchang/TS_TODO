import React, { useState } from 'react';
import { Task } from '../Types';

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskInput: React.FC <Props>= ({tasks,setTasks}) => {
  
  //入力された文字
  const [inputTitle, setInputTitle] = useState<string>('');

  //TODOのidを取得
  const [count,setCount]=useState<number>(tasks.length+1)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
    console.log(e.target.value)
  }

  const handleSubmit = () => {
    setCount(count + 1)
    
    const newTask: Task = {
      id: count,
      title: inputTitle,
      done:false
    }

    setTasks([newTask,...tasks])//追加
    setInputTitle('');
  }

  return (
    <div className='input-form'>
        <div className='inner'>
        <input
          type="text"
          className='input'
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button
          className='btn is-primary'
          onClick={handleSubmit}
        >追加</button>
        </div>
    </div>
  );
}

export default TaskInput;
