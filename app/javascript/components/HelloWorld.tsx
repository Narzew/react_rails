import React, { useState } from 'react';

const HelloWorld: React.FC = () => {
  const [count, setCount] = useState(10);

  return (
    <button type="button" onClick={() => setCount((number) => number + 1)}>
      {count}
    </button>
  );
};

export default HelloWorld;
