import React from 'react';
import Fade from '../../src/react-fade-opacity';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      in: true,
      interval: 50,
      delay: 500,
      fadeCompleteMessage: 'Fade Complete Message'
    };

    this.runAnimation = () => {
      this.setState({
        // create element
        run: true,
        // get form props
        in: this.refs.in.checked,
        interval: parseInt(this.refs.interval.value, 10),
        delay: parseInt(this.refs.delay.value, 10),
        fadeCompleteMessage: this.refs.fadeCompleteMessage.value
      });
    };
    this.onFadeComplete = () => {
      alert(`onFadeComplete: ${this.state.fadeCompleteMessage}`);
      this.setState({ run: false }); // destroy element
    };
  }

  render() {

    return (
       <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <div className="jumbotron">
          <div className="container">
            <h1>React-fade-opacity</h1>
            <p>React.js fade out/in opacity effect</p>
            <h3>
              <a href="https://github.com/AgamlaRage/react-fade-opacity" target="_blank">Github</a>
              &nbsp;|&nbsp;
              <a href="https://www.npmjs.com/package/react-fade-opacity" target="_blank">npm</a>
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h3>Props</h3>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-check">
                        <label className="form-check-label" htmlFor="in">Fade In:</label>
                        <input className="form-check-input" name="in" id="in" ref="in" type="checkbox" aria-label="Fade In Checkbox" defaultChecked={this.state.in} />
                      </div>
                      <br />
                      <div className="input-group">
                        <span className="input-group-addon" id="interval">Interval (ms)</span>
                        <input className="form-control" aria-describedby="interval" type="number" name="interval" ref="interval" defaultValue={this.state.interval}></input>
                      </div>
                      <br />
                      <div className="input-group">
                        <span className="input-group-addon" id="delay">Delay (ms)</span>
                        <input className="form-control" aria-describedby="delay" type="number" name="delay" ref="delay" defaultValue={this.state.delay}></input>
                      </div>
                      <br />
                      <div className="input-group">
                        <span className="input-group-addon" id="fadeCompleteMessage">Fade Complete Message</span>
                        <input className="form-control" aria-describedby="fadeCompleteMessage" type="text" name="fadeCompleteMessage" ref="fadeCompleteMessage" defaultValue={this.state.fadeCompleteMessage}></input>
                      </div>
                      <br />
                      <button type="button" className="btn btn-primary btn-block" onClick={this.runAnimation}>Run Animation</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {this.state.run &&
              <Fade {...this.state} onFadeComplete={this.onFadeComplete}>
                <div className="col-sm-6">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h3>Your Animation Here!</h3>
                      <div className="row">
                        <div className="col-sm-12">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
