
import React from 'react';
import LanguageContext from '../context/language-context';

class LanguageSelector extends React.Component {

  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <div>
          Select a Language: 
          <i onClick={() => this.context.onLanguageChange('english')} className="flag us" />
          <i onClick={() => this.context.onLanguageChange('dutch')} className="flag nl" />
        </div>
      </div>
    );
  }

}

export default LanguageSelector;
