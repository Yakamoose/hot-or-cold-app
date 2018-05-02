import React from 'react';

import './nav.css';

export default function Nav(props) {
  return (
    <nav>
      <ul className="nav-bar">
        <li className="new-game">
          <a className="restart" href="./index.html" onClick={() => props.onRestartGame()}>
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}
