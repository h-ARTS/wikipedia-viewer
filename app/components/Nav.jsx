import React, {PropTypes} from 'react';

const styles = {
   borderBottomLeftRadius: '5px',
   borderBottomRightRadius: '5px'
}

const Nav = props => {
   return(
      <nav className="navbar navbar-inverse bg-primary" style={styles}>
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