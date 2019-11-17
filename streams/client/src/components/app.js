
import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/stream-list';
import StreamCreate from './streams/stream-create';
import StreamEdit from './streams/stream-edit';
import StreamDelete from './streams/stream-delete';
import StreamShow from './streams/stream-show';
import Header from './header';
import history from '../history';

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={StreamList} />  
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Router>
      </div>
    );
  }

}

export default App;
