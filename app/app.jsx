import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WikipediaViewer from './components/WikipediaViewer';
import Nav from './components/Nav';

const title = "Wikipedia Viewer by Hanan Mufti";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">
        <Nav title={title} />
        <h1>Boilerplate app!</h1>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
