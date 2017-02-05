import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col, FormGroup, Jumbotron, Button, Panel } from 'react-bootstrap';
import Fade from 'react-fade-opacity';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // demo props
      run: false,
      // fade props
      in: true,
      interval: 50,
      delay: 500
    };

    this.runAnimation = () => {
      this.setState({
        // create element
        run: true,
        // get form props
        in: this.refs.in.checked,
        interval: parseInt(this.refs.interval.value, 10),
        delay: parseInt(this.refs.delay.value, 10)
      });
    };
    this.onFadeComplete = () => {
      alert('onFadeComplete: animation complete');
      this.setState({run: false}); // destroy element
    };
  }

  render() {

    return (
      <Grid>
        <Jumbotron style={{marginTop: '15px'}}>
          <h1>react-fade-opacity</h1>
          <p>React.js fade out/in opacity effect</p>
          <p>
            <a href="https://github.com/AgamlaRage/react-fade-opacity" target="_blank">Github</a>
            &nbsp;|&nbsp;
            <a href="https://www.npmjs.com/package/react-fade-opacity" target="_blank">npm</a>
          </p>
        </Jumbotron>
        <Row>

          <Col xs={6}>
            <h3>Props</h3>

            <FormGroup>
              <label>in <input type="checkbox" name="in" ref="in" defaultChecked={this.state.in}></input></label>
            </FormGroup>
            <FormGroup>
              interval <input type="number" name="interval" ref="interval" defaultValue={this.state.interval}></input>
            </FormGroup>
            <FormGroup>
              delay <input type="number" name="delay" ref="delay" defaultValue={this.state.delay}></input>
            </FormGroup>
          </Col>

          <Col xs={6}>
            <h3>Result&nbsp;<Button bsStyle="primary" onClick={this.runAnimation}>Run animation</Button>&nbsp;</h3>

            {this.state.run &&
              <Fade {...this.state} onFadeComplete={this.onFadeComplete}>
                <Panel header={'Result'} bsStyle="primary">
                  Panel content
                </Panel>
              </Fade>}

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
