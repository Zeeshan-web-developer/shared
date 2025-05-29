import React from 'react';

const Header = ({color}) => {
  return (
    <header
     style={{ padding: '1rem', color: {color} }}>
      <h1>🚀 Common Header</h1>
    </header>
  );
};

export default Header;
