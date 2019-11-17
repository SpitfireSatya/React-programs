
import React from 'react';
import { connect } from 'react-redux';
import Modal from '../modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onDeleteClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  onDismiss = () => history.push('/');

  renderActions = () => {
    return (
      <React.Fragment>
        <button onClick={this.onDeleteClick} className="ui button negative">Delete</button>
        <button onClick={this.onDismiss} className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  renderContent = () => {
    if(this.props.stream) {
      return `Are you sure you want to delete "${this.props.stream.title}"?`
    } else {
      return `Are you sure you want to delete?`
    }
  }

  render() {
    return(
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
