import React from 'react';
import PropTypes from 'prop-types';

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Fade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: (this.props.in) ? 0 : 1
    };

    this.fade = () => {
      const _this = this;
      let op = this.state.opacity;
      var timer = setInterval(function() {
        if (op <= 0.1) {
          _this.setState({opacity: 0});
          clearInterval(timer);
          if (typeof props.onFadeComplete === 'function') {
            props.onFadeComplete(); // custom callback
          }
        } else {
          op -= op * 0.1;
          _this.setState({opacity: op});
        }
      }, this.props.interval);
    };
    this.unfade = () => {
      const _this = this;
      let op = this.state.opacity;
      var timer = setInterval(function () {
        if (op >= 1) {
          _this.setState({opacity: 1});
          clearInterval(timer);
          if (typeof props.onFadeComplete === 'function') {
            props.onFadeComplete(); // custom callback
          }
        } else {
          if (op === 0) {
            op = 0.1;
          }
          op += op * 0.1;
          _this.setState({opacity: op});
        }
      }, this.props.interval);
    };
  }
  componentDidMount() {
    sleep(this.props.delay).then(() => { // wait the delay before starting animation
      if (this.props.in) {
        this.unfade();
      } else {
        this.fade();
      }
    });
  }

  render() {
    const { children } = this.props
    return React.cloneElement(children, {
      style: {opacity: this.state.opacity}
    });
  }

  static propTypes = {
    in: PropTypes.bool,
    interval: PropTypes.number,
    delay: PropTypes.number,
    chidlren: PropTypes.node,
    onFadeComplete: PropTypes.func
  }
  static defaultProps = {
    in: false,
    interval: 50,
    delay: 6000
  }
}

module.exports = Fade;
