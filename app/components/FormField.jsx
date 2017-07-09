import React, {Component} from 'react';
import axios from 'axios';

const styles = {
   borderRadius: '5px'
}

class FormField extends Component {
   constructor(props) {
      super(props);
      this.state = {
         query: this.props.query
      }
      this._search = this._search.bind(this);
   }

   componentWillUnmount() {
      this.serverRequest.abort();
   }

   _search(e) {
      e.preventDefault();
      
      const input = this.refs.search.value;

      axios.get('https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + input)
      .then(res => {
         this.setState({
            query: Object.entries(res.data.query.pages),
            render: true
         });
         this.props.newSearch(this.state.query);
      })

      if (input.length > 0) {
         this.refs.search.value = '';
      }
   }

   render() {
      return (
         <form className="bg-inverse form-group mt-4 p-4" onSubmit={this._search} style={styles}>
            <input type="text" ref="search" className="form-control"/>
            <a href="https://en.wikipedia.org/wiki/Special:Random" className="btn btn-block btn-outline-primary mt-3" target="_blank">I am lucky!</a>
         </form>
      )
   }
}

export default FormField;