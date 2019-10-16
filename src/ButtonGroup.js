import React from "react";
import { store } from "./store";

// map over each of the technologies listed as props for ButtonGroup in App.js
// set the key equal to the index
// make the button text equal to the technology name that is being mapped over
// the data-tech attribute is a data attribute which is used to store extra information for easy access to this value later

const ButtonGroup = ({ technologies }) => (
  <div>
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

// this function takes in the button text and returns the required action

const setTechnology = text => {
    return {
       type: "SET_TECHNOLOGY",
       text: text
     }
  }

// this function is invoked when a button is clicked
// it targets the button text and uses it to create an action in the setTechnology function
// the setTechnology function is called inside of the store.dispatch function to dispatch the action it creates
// so basically, this function is creating a new action and dispatching it all at once

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech; //getting the button text
    store.dispatch(setTechnology(tech)); //invoking the action creator
}

export default ButtonGroup;