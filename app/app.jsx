import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import WikipediaViewer from './components/WikipediaViewer';
import Nav from './components/Nav';
import Footer from './components/Footer';

const title = "Wikipedia Viewer by Hanan Mufti";
const copyright = "Made by Hanan Mufti";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Nav title={title} />
        <WikipediaViewer />
        <Footer copyright={copyright} />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
