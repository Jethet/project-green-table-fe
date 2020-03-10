import React from "react";
import axios from "axios";

function Credits() {
  return (
    <div className="credits-background">
      <div className="credits-container">
        <div>
          <h1>Acknowledgements</h1>
        </div>
        <div id="credits-title">
          <h2>Many thanks to:</h2>
          <ul className="credits">
            <li className="credits">
              Kimberly Geswein, designer, for the beautiful font 'Architects Daughter',
              that is available for free.
            </li>
            <li className="credits">
              Wisse Hettinga, designer, for the images and background illustrations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Credits;
