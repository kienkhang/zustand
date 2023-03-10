import useCounter from "@/hooks/counter/useCounter";

const CounterPage = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <div className="text-lg text-blue-600">Count: {count}</div>
      <div className="btn btn-info  min-h-0" onClick={() => increment(2)}>
        Incre
      </div>
      <div className="btn btn-success min-h-0" onClick={() => decrement(2)}>
        Decre
      </div>
      <Link to="/" className="btn">
        Go to home
      </Link>
    </div>
  );
};

export default CounterPage;
