import { NamedSet } from 'zustand/esm/middleware'
import { StateCreator } from 'zustand'
import useZustand from './useZustand'

interface ITodo {
  todos: {
    id: string
    todo: string
  }[]
  addTodo: (todo: string) => {
    id: string
    todo: string
  }
  removeTodo: (id: string) => void
}

const useToto: StateCreator<ITodo> = (set: NamedSet<ITodo>, get) => ({
  todos: [
    { id: 'f40d0e21-0ce6-4003-b1d1-c1955c92d31d', todo: 'đi làm' },
    { id: 'cc1c4ecf-d373-482a-bcd2-59356f09bb60', todo: 'đi chơi' },
    { id: '96304138-96de-432d-b305-c1f6487c0ff6', todo: 'đi ngủ' },
  ],
  addTodo(todo) {
    const newTodo = {
      id: crypto.randomUUID(),
      todo,
    }
    set((state) => ({ ...state, todos: [...state.todos, newTodo] }), false, 'add')
    return newTodo
  },
  removeTodo(id) {
    const newTodos = get().todos.filter((todo) => todo.id !== id)
    set((state) => ({ ...state, todos: newTodos }), false, `remove`)
  },
})

export default useZustand('todos', useToto)
