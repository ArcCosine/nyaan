import * as common from './common.js';

// key events
export const keyEvents = (eve) => {

  if (eve.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  const active = document.querySelector('.active');
  switch (event.key) {
    case 'Enter':
    case 'o':
      active.click();
      break;
    case 'ArrowDown':
    case 'j':
      common.moveNode(active, active.nextSibling);
      break;
    case 'ArrowUp':
    case 'k':
      common.moveNode(active, active.previousSibling);
      break;
    case 'r':
      if (!eve.ctrlKey) {
        common.reloadImage(eve);
      }
      break;
    default:
      return;
  };
  eve.preventDefault();
};
