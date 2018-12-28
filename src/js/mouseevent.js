import * as common from './common.js';

// key events
export const mouseEvents = (eve) => {

  if (eve.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  document.querySelector('.active').classList.add('invisible');
  return;
};
