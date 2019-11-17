import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videRef = React.createRef();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }

    const id = this.props.match.params.id;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videRef.current);
    this.player.load();
  };

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentWillUnmount() {
    if(this.player) {
      this.player.destroy();
    }
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <video style={{ width: "100%" }} ref={this.videRef} controls={true} />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
