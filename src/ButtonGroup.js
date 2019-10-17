import React from "react";
import { dispatchBtnAction } from "./actions/index";

// map over each of the technologies listed as props for ButtonGroup in App.js
// set the key equal to the index
// make the button text equal to the technology name that is being mapped over
// the data-tech attribute is a data attribute which is used to store extra information for easy access to this value later

const ButtonGroup = ({ technologies }) => (
  <div className="button-container">
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

export default ButtonGroup;