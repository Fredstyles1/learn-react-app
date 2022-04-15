import React from 'react';

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <img src={require('../image/logo192.png')} alt="logo" className='nav--logo'/>
        <span className='logo--text'>Fem's Dev</span>
      </nav>
    </div>
  );
}

export default Navbar;