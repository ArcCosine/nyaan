import clickLink from './clicklink.js';

// render meow
const renderMeow = (text, index) => {
    const section = document.querySelector('section');
    const link = section.appendChild(document.createElement('a'));
    const hashtag = 'nyaan';
    link.appendChild(document.createTextNode(text));
    link.setAttribute('href', `https://twitter.com/share?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://nyaan.work/')}&hashtags=${encodeURIComponent(hashtag)}`);
    link.classList.add('text');
    if (index === 0) {
        link.classList.add('active');
    }
    link.addEventListener('click', clickLink, false);
};

export default renderMeow;
