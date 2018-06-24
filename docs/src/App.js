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
      const { delay, interval, fadeCompleteMessage } = this.refs

      this.setState({
        // create element
        run: true,
        // get form props
        in: this.refs.in.checked,
        interval: parseInt(interval.value, 10),
        delay: parseInt(delay.value, 10),
        fadeCompleteMessage: fadeCompleteMessage.value
      });
    };
    this.onFadeComplete = () => {
      alert(`onFadeComplete: ${this.state.fadeCompleteMessage}`);
      this.setState({ run: false }); // destroy element
    };
  }

  render() {
    const { delay, interval, run, fadeCompleteMessage } = this.state

    return (
      <React.Fragment>

        <div className="jumbotron">
          <div className="container">
            <h1>react-fade-opacity</h1>
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
              <div className="border p-3">

                <h3>Props</h3>
                <form>

                  <div className="form-group row">
                    <label className="col-form-label col-sm-4" htmlFor="in">Fade In:</label>
                    <div className="col-sm-8">
                      <input className="form-control" name="in" id="in" ref="in" type="checkbox" aria-label="Fade In Checkbox" defaultChecked={this.state.in} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-4" id="interval">Interval (ms)</label>
                    <div className="col-sm-8">
                      <input className="form-control" aria-describedby="interval" type="number" name="interval" ref="interval" defaultValue={interval}></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-4" id="delay">Delay (ms)</label>
                    <div className="col-sm-8">
                      <input className="form-control" aria-describedby="delay" type="number" name="delay" ref="delay" defaultValue={delay}></input>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-sm-4" id="fadeCompleteMessage">Fade Complete Message</label>
                    <div className="col-sm-8">
                      <input className="form-control" aria-describedby="fadeCompleteMessage" type="text" name="fadeCompleteMessage" ref="fadeCompleteMessage" defaultValue={fadeCompleteMessage}></input>
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary btn-block" onClick={this.runAnimation}>Run animation</button>
                </form>

              </div>
            </div>

            {run &&
              <Fade {...this.state} onFadeComplete={this.onFadeComplete}>
                <div className="col-sm-6">
                  <div className="border p-3">
                    <h3>Your Animation Here!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </Fade>}

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
