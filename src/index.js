import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './styles/main.scss'


ReactDOM.render(<App />, document.getElementById('root'));
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }