import React, { Component } from 'react';
import Header from './components/backend/Header';
import SideBar from './components/backend/SideBar';
import Content from './components/backend/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default App;