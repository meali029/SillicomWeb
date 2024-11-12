import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  let addNum = () => {
    if (count === 20) {
      setText("You reached Maximum Limit");
      setCount(0);
    } else {
      setCount(count + 1);
      setText(''); // Clear text when not reaching limit
    }
  };

  let remove = () => {
    if (count === 0) {
      setCount(0);
      setText('You Reached Minimum Limit');
    } else {
      setCount(count - 1);
      setText(''); // Clear text when not reaching limit
    }
  };

  return (
    <>
      <div>
        <h1>Sohail Practice: {count}</h1>
        <button onClick={addNum}>Add Number</button>
        <button onClick={remove}>Remove Number</button>
      </div>
      <h1>{text}</h1>
    </>
  );
}

export default App;
