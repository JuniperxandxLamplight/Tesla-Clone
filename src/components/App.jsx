import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <style global jsx>{`
          body{
            margin:0px;
          }
            `}</style>
      <Header/>
      <Switch>
       </Switch>
    </div>
  );
}

export default App;
