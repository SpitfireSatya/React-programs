
import React from 'react';
import LanguageContext from '../context/language-context';
import ColorContext from '../context/color-context';

class Button extends React.Component {

  render() {
    return (
      <div>
        <ColorContext.Consumer>
          {(color) => 
          
          <button className={ `ui button ${color}` }>
            <LanguageContext.Consumer>
              {(value) => value.language === 'english' ? 'Submit': 'Voorleggen'}
            </LanguageContext.Consumer>
          </button>

          }
          
        </ColorContext.Consumer>
      </div>
    );
  }

}

export default Button;
