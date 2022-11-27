import moveNode from './movenode.js';
import reloadImage from './reloadimage.js';
import showHelp from './showhelp.js';
import switchLanguage from './switchLanguage.js';

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
    case 'ArrowRight':
    case 'l':
      moveNode(active, active.nextSibling);
      break;
    case 'ArrowUp':
    case 'k':
    case 'ArrowLeft':
    case 'h':
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
    case 'Escape':
          const help = document.getElementById('help');
          if( help.classList.contains('show') ){
            showHelp(eve);
          }
          break;
    case '[':
          if( eve.ctrlKey ){
            showHelp(eve);
          }
          break;
    case 's':
          switchLanguage();
          break;
    default:
      return;
  };
  eve.preventDefault();
};

export default keyEvent;
