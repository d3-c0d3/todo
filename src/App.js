import React, { Component } from 'react'
import Layout from './Components/Layout/Layout';
import TaskBuilder from './Containers/TaskBuilder/TaskBuilder';

class App extends Component {
  render(){ 
    return (
      <div>
          <Layout/>
      </div>
    );
  }
}

export default App;
