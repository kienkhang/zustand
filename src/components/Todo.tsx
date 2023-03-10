import useTodo from '@/hooks/useTodo'
import { ReactNode } from 'react'

interface IProps {
  id: string
  children: ReactNode
}

const Todo = ({ children, id }: IProps) => {
  const { removeTodo } = useTodo()
  return (
    <div className="flex items-center max-w-lg justify-between shadow-md mb-4 overflow-hidden">
      <span className="p-2">{children}</span>
      <button className="btn btn-error" onClick={() => removeTodo(id)}>
        Delete
      </button>
    </div>
  )
}

export default Todo
