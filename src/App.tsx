import * as React from 'react';
import { Normalize } from 'styled-normalize';

interface AppProps {}

function App({}: React.Props<AppProps>) {
  return (
    <>
      <Normalize />
      <div>
        <header>
          <p>
            Edit <code>src/as.tsx</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
