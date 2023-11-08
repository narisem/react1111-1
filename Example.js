import { useState } from "react";

const Example = () => {
    const [ count, setCount ] = useState(0);
    const countUp = () => {
        setCount(count +1);
    }
    const countDown = () => {
        setCount(count -1);
    }
    return (
        <>
        <p>현재 버튼크릭수: {count}</p>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>

        </>
    );
  
};

export default Example;
