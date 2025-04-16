import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import { Button } from '@heroui/react';
import '../../styles/global.scss';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold bg-red-500">Amonestaciun</h1>
      <div className="card">
        <Button color="primary" onPress={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};
