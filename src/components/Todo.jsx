import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"


const Todo = () => {

const [tasks, setTasks] = useState([
  {id: "task-1", title: "погладить кота", isDone: true},
  {id: "task-2", title: "погладить собаку", isDone: false},
  {id: "task-3", title: "погладить попугая", isDone: true}
]);

const [newTaskTitle, setNewTaskTitle] = useState('');

const deleteAllTasks = () => {
  const isConfirmed = confirm('Are you sure want to delete all?')

  if(isConfirmed){
    setTasks([])
  }
}

const deleteTask = (taskId) => {
  setTasks(
    tasks.filter((task) => task.id !== taskId)
  )
}

const ToggleTaskComplete = (taskId, isDone) => {
  setTasks(
    tasks.map((task) => {
      if(task.id === taskId){
        return {...task, isDone}
      }
      return task
    })
  )
}

const filterTask = (query) => {
  console.log(`поиск: ${query}`)
}

const addTask = () => {
  if(newTaskTitle.trim().length > 0){
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title:newTaskTitle,
      isDone: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }
}

  return(
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm
        onSearchInput={filterTask}
      />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({isDone}) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={ToggleTaskComplete}
      />
    </div>
  )
}

export default Todo