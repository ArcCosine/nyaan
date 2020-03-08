// get random array
const gra = (array) => {
    return array[Math.floor(Math.random() * array.length - 1)];
};

export default gra;
