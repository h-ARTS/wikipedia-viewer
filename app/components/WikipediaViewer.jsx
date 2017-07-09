import React, {Component} from 'react';
import FormField from './FormField';
import axios from 'axios';

class WikipediaViewer extends Component {

   constructor() {
      super();
      this.state = {
         query: {}
      }

      this._search = this._search.bind(this);
   }

   _search(e) {
      e.preventDefault();
      
      const input = this.state.searchQuery;

      axios.get('https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=pageimages&generator=search&piprop=name|original&pilimit=max&gsrlimit=20&gsrsearch=' + input).then(res => {
            this.setState({
               query: Object.assign({}, this.state.query, {query: res.data.query.pages})
            });
            console.log(this.state.query);
         })
   }

   render() {
      return (
         <div>
            <FormField _search={this._search} />
            
         </div>
      );
   }

}

WikipediaViewer.propTypes = {
   query: React.PropTypes.objectOf({
      pageid: React.PropTypes.number,
      original: React.PropTypes.objectOf({
         source: React.PropTypes.string
      }),
      title: React.PropTypes.string,
   })
}

export default WikipediaViewer