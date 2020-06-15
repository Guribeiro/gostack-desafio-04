import React from 'react';

import Header from './components/Header';
import PostList from './components/PostList';

import './style/reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
