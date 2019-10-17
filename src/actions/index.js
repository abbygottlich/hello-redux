import { store } from "../store/index";

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

export function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech; //getting the button text
    store.dispatch(setTechnology(tech)); //invoking the action creator
}