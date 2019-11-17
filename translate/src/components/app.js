
import React from 'react';
import UserCreate from './user-create';
import LanguageContext from '../context/language-context';
import ColorContext from '../context/color-context';


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
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }

}

export default App;
