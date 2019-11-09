
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/stream-list';
import StreamCreate from './streams/stream-create';
import StreamEdit from './streams/stream-edit';
import StreamDelete from './streams/stream-delete';
import StreamShow from './streams/stream-show';

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={StreamList} />  
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
