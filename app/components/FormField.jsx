import React, {Component} from 'react';

class FormField extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <form onSubmit={this.props._search}>
            <input type="text" ref="search"/>
         </form>
      )
   }
}

export default FormField;