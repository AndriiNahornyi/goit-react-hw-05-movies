export const createImgStr = path => {
  if (path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  } else {
    return;
    // `https://image.tmdb.org`
  }
};
