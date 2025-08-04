import reactLogo from './assets/react.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { healthCheck } from './services';

function App() {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    healthCheck().then(message => setMessage(message));
  }, []);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Climate X</h1>
      <p>{message}</p>
    </>
  );
}

export default App;
