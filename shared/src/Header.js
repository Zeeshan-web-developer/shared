import React from 'react';

const Header = ({color}) => {
  return (
    <header
      
      style={{ padding: '1rem', background: {color}, color: 'white' }}>
      <h1>🚀 Common Header</h1>
    </header>
  );
};

export default Header;
