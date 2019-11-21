import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage(props) {
  return (
    <div>
      <header>
        <h1>Level 1</h1>
      </header>
      <footer>
        <Link to="/map">Home</Link>
        <Link to="/trolley">Trolley</Link>
      </footer>
    </div>
  )
}
