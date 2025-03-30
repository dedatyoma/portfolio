import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Shop' },
  { path: '/men', label: 'Men' },
  { path: '/women', label: 'Women' },
  { path: '/kids', label: 'Kids' }
];

const NavLinks = () => {
  const location = useLocation();

  return (
    <ul className="nav-menu">
      {navItems.map(({ path, label }) => (
        <li key={path}>
          <Link 
            to={path} 
            className={location.pathname === path ? 'active' : ''}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks; 