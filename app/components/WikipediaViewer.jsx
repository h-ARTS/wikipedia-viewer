import React, {Component} from 'react';
import FormField from './FormField';
import Results from './Results';

class WikipediaViewer extends Component {

   constructor() {
      super();
      this.state = {
         query: [],
         render: false
      }
      this._handleState = this._handleState.bind(this);
      this._renderResults = this._renderResults.bind(this);
   }

   _handleState(data) {
      this.setState({
         query: data,
         render: !this.state.render
      })
   }

   _renderResults() {
      return this.state.render === true ? <Results query={this.state.query} /> : this.state.render = false;
   }

   render() {
      return (
         <div>
            <FormField query={this.state.query} newSearch={this._handleState} />
            <div className="row">
               {this._renderResults()}
            </div>
         </div>
      );
   }

}

WikipediaViewer.propTypes = {
   query: React.PropTypes.shape({
      pageid: React.PropTypes.number,
      original: React.PropTypes.any,
      title: React.PropTypes.string,
   })
}

export default WikipediaViewer