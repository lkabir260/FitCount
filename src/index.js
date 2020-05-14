import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './pages/App/App.css';


serviceWorker.unregister();




class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Welcome</h1>
      <p>Track your fitness habits!</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);
