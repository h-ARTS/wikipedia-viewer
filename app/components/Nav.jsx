import React, {PropTypes} from 'react';

const Nav = props => {
   return(
      <nav className="navbar navbar-inverse bg-primary">
         <p className="m-0 text-center navbar-brand">
            {props.title}
         </p>
      </nav>
   );
}

Nav.propTypes = {
   title: PropTypes.string.isRequired
}

export default Nav;