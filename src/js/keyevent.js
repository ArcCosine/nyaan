import moveNode from './movenode.js';
import reloadImage from './reloadimage.js';
import showHelp from './showhelp.js';

// key events
const keyEvent = (eve) => {

  if (eve.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  const active = document.querySelector('.active');
  active.classList.remove('invisible');
  switch (eve.key) {
    case 'Enter':
    case 'o':
      active.click();
      break;
    case 'ArrowDown':
    case 'j':
      moveNode(active, active.nextSibling);
      break;
    case 'ArrowUp':
    case 'k':
      moveNode(active, active.previousSibling);
      break;
    case 'r':
      if (!eve.ctrlKey) {
        reloadImage(eve);
      } else {
          return;
      }
      break;
    case '?':
          showHelp(eve);
          break;
    case '[':
          if( eve.ctrlKey ){
            showHelp(eve);
          }
          break;
    default:
      return;
  };
  eve.preventDefault();
};

export default keyEvent;
