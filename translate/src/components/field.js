
import React from 'react';
import LanguageContext from '../context/language-context';

class Field extends React.Component {

  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }

}

export default Field;
