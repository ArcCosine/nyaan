// key events
const mouseEvent = (eve) => {

  if (eve.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  document.querySelector('.active').classList.add('invisible');
  return;
};

export default mouseEvent;
