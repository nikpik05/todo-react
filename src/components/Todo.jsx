import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"


const Todo = () => {
const tasks = [
  {id: "task-1", title: "погладить кота", isDone: true},
  {id: "task-2", title: "погладить собаку", isDone: false},
  {id: "task-3", title: "погладить попугая", isDone: true}
]

const deleteAllTasks = () => {
  console.log('удаляем все задачи');
}

const deleteTask = (taskId) => {
  console.log('удаляем задачу')
}

const ToggleTaskComplete = (taskId, isDone) => {
  console.log(`задача ${taskId} ${isDone ? 'выполнена': 'не выполнена'}`)
}

const filterTask = (query) => {
  console.log(`поиск: ${query}`)
}

  return(
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm/>
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