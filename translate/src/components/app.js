
import React from 'react';
import UserCreate from './user-create';
import { LanguageStore } from '../context/language-context';
import ColorContext from '../context/color-context';
import LanguageSelector from './language-selector';


class App extends React.Component {

  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          
          <ColorContext.Provider value="red">
            <UserCreate />
          
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }

}

export default App;
