// move Nodes.
const moveNode = (activeNode,judgeNode) => {
    if( judgeNode ){
        activeNode.classList.remove('active');
        judgeNode.classList.add('active');
        window.scrollTo({
            top:judgeNode.offsetTop,
            behavior: 'smooth'
        });
    }
};


// key events
export const keyEvents = (eve) => {

  if (eve.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  const active = document.querySelector('.active');
  switch(event.key){
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
    default:
      return;
  };
  eve.preventDefault();
};
