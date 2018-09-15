import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Post app with Redux</h1>
        </header>
        <PostForm />
        <Post />

      </div>
    );
  }
}

export default App;
