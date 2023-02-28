import { useState, useContext } from 'react';
import context from "../context/Context"
import useLocalStorage from '../useLocalStorage';

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';



const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked ] = useState(task.checked);
  const {TaskCounter, setTaskCounter} = useContext(context)
  
  let counter = 0

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);

    if(!isChecked){
     console.log(TaskCounter +1)
      // console.log(isChecked)
      console.log(counter++)
      setTaskCounter(TaskCounter +1)
      window.localStorage.setItem('react-task-counter', JSON.stringify(TaskCounter +1))
      let number = window.localStorage.getItem('react-task-counter')
      console.log(number)
    }
    // console.log(counter)
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="todocheckbox"
          className={styles.todocheckbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.name}
          <p className={styles.todocheckmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='todobtn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}
export default TaskItem