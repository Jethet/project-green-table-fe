import React from "react";
import axios from "axios";

function Credits() {
  return (
    <div className="credits-background">
      <div className="credits-container">
        <div>
          <h1 id="credits-header">Acknowledgements</h1>
        </div>
        <div>
          <h2 id="credits-title">Many thanks to:</h2>
          <ul className="credits">
            <li className="credits">
              Kimberly Geswein, designer, for the beautiful font 'Architects Daughter'.
              This font has been used for The Green Table app, and is available for free.
            </li>
            <li className="credits">
              Wisse Hettinga, designer, for the images and background illustrations.
            </li>
            <li className="credits">
              Freepik, designer, for the icons used in the navbar.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Credits;
