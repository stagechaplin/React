import React,{useState,useEffect} from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY =10;

function Accommodate(props) {
  const [IsFull, setIsFull] = useState(false);
  const [count, increaseCount,decreaseCount] = useCounter(0);

  useEffect(()=> {
    console.log("===============================");
    console.log("useEffect() is called");
    console.log(`isFull: ${IsFull}`);
  });

  useEffect(()=> {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count vlue: ${count}`);
  },[count]);

  return (
    <div style={{padding:16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={IsFull}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>

      {IsFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>
      }
    </div>
  );
}

export default Accommodate;