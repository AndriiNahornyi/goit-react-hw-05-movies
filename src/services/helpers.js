export const createImgStr = path => {
  if (path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  } else {
    return `https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif`;
  }
};
