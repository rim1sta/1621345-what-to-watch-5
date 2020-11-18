import React, {PureComponent} from "react";


export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }
  componentDidMount() {
    const {src} = this.props;
    this._video = new Video(src);
    this._video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
    this._video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };
    this._video.onpause = () => this.setState({
      isPlaying: false,
    });
  }
  componentWillUnmount() {
    this._video.oncanplaythrough = null;
    this._video.onplay = null;
    this._video.onpause = null;
    this._video = null;
  }
  render() {
    const {film} = this.state;
    return (
      <React.Fragment>
        <video src={film.video} className="player__video" poster={film.poster}></video>
      </React.Fragment>
    );
  }
  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._video.play();
    } else {
      this._video.pause();
    }
  }
}
