
import React from 'react';
import UserCreate from './user-create';
import LanguageContext from '../context/language-context';

class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language: 
          <i onClick={() => this.onLanguageChange('english')} className="flag us" />
          <i onClick={() => this.onLanguageChange('dutch')} className="flag nl" />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }

}

export default App;
