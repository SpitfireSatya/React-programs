
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season-display'
import Spinner from './spinner';

class App extends React.Component {

  state = { lat: null, errorMessage: '' };

  constructor(props) {
    
    console.log('Constructor executed');

    super(props)

  }

  componentWillMount() {
    console.log('Component will mount executed');
  }

  componentDidMount() {
    console.log('Component did mount executed');
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
    }, (error) => {
      this.setState({ errorMessage: error.message });
    });
  }

  componentDidUpdate() {
    console.log('Component did update executed');
  }

  componentWillUnmount() {
    console.log('Component will unmount executed');
  }

  render() {

    console.log('Render executed');

    if(this.state.errorMessage && !this.state.lat) {
      return (<div>Error: {this.state.errorMessage}</div>);
    } else if(!this.state.errorMessage && this.state.lat) {
      return (<SeasonDisplay lat={this.state.lat} />);
    } else {
      return (<Spinner message="Please accept the location request" />);
    }
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
