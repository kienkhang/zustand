import Todo from '@/components/Todo'
import useTodo from '@/hooks/useTodo'

const TodoPage = () => {
  const [todo, setTodo] = useState('')
  const { todos, addTodo } = useTodo()
  const doSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (todo.length > 0) addTodo(todo)
    setTodo('')
  }
  return (
    <div className="max-w-xs">
      <form onSubmit={doSubmit} className="w-full p-2 bg-green-300">
        <input
          type="text"
          className="input"
          name="todo"
          placeholder="Type Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn">Add Todo</button>
      </form>
      <div className=" rounded-lg p-4">
        {todos.length > 0 &&
          todos.map((item) => {
            return (
              <Todo key={item.id} id={item.id}>
                {item.todo}
              </Todo>
            )
          })}
      </div>
      <Link className="btn" to="/">
        Go to Home
      </Link>
    </div>
  )
}

export default TodoPage
