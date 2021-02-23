import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../stores/example';

export default function ReduxExample() {
  const { count } = useSelector(state => state.example);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count: {count}</p>
      
      <button onClick={() => { dispatch(decrement()) }}>－</button>
      <button onClick={() => { dispatch(increment()) }}>＋</button>
    </div>
  );
}
