import React, { Component } from 'react';
import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import Content from './component/homepage/content'
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>

      </div>
    );
  }
}

export default App;
