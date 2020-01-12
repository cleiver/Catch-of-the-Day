import React from 'react';
import PropTypes from 'prop-types';

// stateless functional Component
// we do not need a class just to return simple html
// we can change it to a function

const Header = props => {
  return (
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        day!
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
};

// It's declared here because it's a stateless function
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;
