# react-fade-opacity

React.js fade out/in opacity effect

 [npm](https://www.npmjs.com/package/react-fade-opacity)

## Install

```sh
$ npm install --save react-fade-opacity
```


## Demo

 [Try it out !](https://agamlarage.github.io/react-fade-opacity/)




## Usage

```javascript
import Fade from 'react-fade-opacity'

render() {
  <Fade>
    <button>Hello</button>
  </Fade>
}
```



## API

### Props

```javascript
  static propTypes = {
    in: PropTypes.bool,
    interval: PropTypes.number,
    delay: PropTypes.number,
    children: PropTypes.node
  }
  static defaultProps = {
    in: false,
    interval: 50,
    delay: 6000
  }
```

| Property | Description                   |
| -------- | ----------------------------- |
| in   | animation fade in |
| interval    | animation fade duration |
| delay    | Time before the animation will show |
| onFadeComplete    | `callback` when animation is complete |
