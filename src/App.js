import React from 'react';
import {ApolloProvider} from "@apollo/client";

import { client } from './ApolloClient/client'

import Planets from "./routes/Planet";

import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <div>
              <h2>My first Apollo app 🚀</h2>
              <Planets/>
          </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
