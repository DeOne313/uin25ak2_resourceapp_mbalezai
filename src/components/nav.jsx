import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/html" id="knpHTML">HTML</Link>
      <Link to="/css" id="knpCSS">CSS</Link>
      <Link to="/javascript" id="knpJScript">JavaScript</Link>
      <Link to="/react" id="knpReact">React</Link>
      <Link to="/sanity-headless-cms" id="knpSHCMS">Sanity and Headless CMS</Link>
    </nav>
  );
};

export default Nav;