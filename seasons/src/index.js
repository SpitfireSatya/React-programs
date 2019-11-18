
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display'
import Spinner from './spinner';
import userLocation from './user-location';

const App = () => {

  const [lat, errorMessage] = userLocation();
  
  let content;
  if(errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>
  } else if(!errorMessage && lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner message="Please accept the location request" />
  }

  return (<div className="border red">{content}</div>);

}

ReactDOM.render(<App />, document.getElementById('root'));
