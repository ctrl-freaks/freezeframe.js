import React from 'react';
import { render } from 'react-dom';
import ReactFreezeframe from './components/ReactFreezeframe';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.freeze = React.createRef();
  }

  render() {
    return (
      <div>
        <p className="bold title">react-freezeframe</p>

        <div className="section">
          <p>basic,<br />animate on hover.</p>
          <ReactFreezeframe
            src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w"
            onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
            onStart={(items, isPlaying) => this.logEvent('start', items, isPlaying)}
            onStop={(items, isPlaying) => this.logEvent('stop', items, isPlaying)}
          />
        </div>

        <div className="section">
          <p>start/stop manually, with overlay</p>

          <button onClick={() => this.start()}>Start</button>
          <button onClick={() => this.stop()}>Stop</button>
          <button onClick={() => this.toggle()}>Toggle</button>

          <ReactFreezeframe
            src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif"
            ref={this.freeze}
            options={{
              trigger: false,
              overlay: true
            }}
            onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
            onStart={(items, isPlaying) => this.logEvent('start', items, isPlaying)}
            onStop={(items, isPlaying) => this.logEvent('stop', items, isPlaying)}
          />
        </div>

        <div className="section">
          <p>using children & overlay</p>

          <ReactFreezeframe
            options={{
              overlay: true
            }}
          >
            <div className="grid">
              <div className="cell">
                <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e801085229b264ca29fc/1519577337605/download.gif?format=1000w" alt="" />
              </div>
              <div className="cell">
                <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e904c830257a34734ff5/1519577373504/Armani-Central-Park-6151.gif?format=1000w" alt="" />
              </div>
              <div className="cell">
                <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a95c231419202eb9a763970/1519814094692/tumblr_nfro6qnt591qzcq51o1_500.gif?format=750w" alt="" />
              </div>
              <div className="cell">
                <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w" alt="" />
              </div>
            </div>
          </ReactFreezeframe>
        </div>

        <p>cinemagraphs by <a href="http://www.cinemagraphs.com/">cinemagraphs.com</a></p>
      </div>
    );
  }

  start() {
    this.freeze.current.start();
  }

  stop() {
    this.freeze.current.stop();
  }

  toggle() {
    this.freeze.current.toggle();
  }

  logEvent(event, items, isPlaying) {
    console.log(event, items, isPlaying);
  }
}

render(<App />, document.getElementById('root'));
