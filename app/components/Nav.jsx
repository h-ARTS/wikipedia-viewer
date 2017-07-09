import React from 'react';

const Nav = props => {
   return(
      <nav className="navbar navbar-inverse bg-primary">
         <p className="m-0 text-center navbar-brand">
            {props.title}
         </p>
      </nav>
   );
}

export default Nav;