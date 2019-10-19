
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  window.navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos);
  }, (error) => {
    console.log('User denied location', error)
  });

  return (<div>Hi There!</div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
