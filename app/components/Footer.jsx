import React, {PropTypes} from 'react';

const styles = {
   borderTopLeftRadius: '5px',
   borderTopRightRadius: '5px'
}

const Footer = props => {
   return(
      <nav className="container navbar fixed-bottom bg-inverse" style={styles}>
         <p className="m-0 text-center text-white">
            {props.copyright}
         </p>
      </nav>
   );
}

Footer.propTypes = {
   copyright: PropTypes.string.isRequired
}

export default Footer;