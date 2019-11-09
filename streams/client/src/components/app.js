
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>Page One</div>
  );
}

const PageTwo = () => {
  return (
    <div>Page Two</div>
  );
}

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={PageOne} />  
          <Route path="/pagetwo" exact component={PageTwo} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
