import Panel from './panel.js';
import { BOX_DEFAULTS, CONTAINER_DEFAULTS } from '../defaults.js';

class App extends React.Component {
  state = {
    boxStyle: BOX_DEFAULTS,
    containerStyle: CONTAINER_DEFAULTS
  };

  setBoxStyle = (styleItem) => {
    this.setState(state => ({
      boxStyle: { ...state.boxStyle, ...styleItem }
    }));
  }

  setContainerStyle = (styleItem) => {
    this.setState(state => ({
      containerStyle: { ...state.containerStyle, ...styleItem }
    }));
  }

  render() {
    const { boxStyle, containerStyle } = this.state;
    return (
      <div className="app">
        <div className="canvas" style={containerStyle}>
          <div className="box" style={boxStyle} />
        </div>
        <Panel boxStyle={boxStyle} containerStyle={containerStyle}
          onBoxStyleChange={style => this.setBoxStyle(style)}
          onContainerStyleChange={style => this.setContainerStyle(style)}/>
      </div>
    );
  }
}

export default App;
