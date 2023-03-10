const HomePage = () => {
  const [text, setText] = useState('How to learn React with TS')
  return (
    <div>
      <div className="text-lg text-red-500">{text}</div>
      <Link className="btn min-h-0" to="/counter">
        Go to Counter
      </Link>
      <Link className="btn min-h-0" to="/todo">
        Go to Todo
      </Link>
    </div>
  )
}

export default HomePage
