
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './google-auth';

class Header extends React.Component {

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth className="item" />
        </div>
      </div>
    )
  }

}

export default Header;
