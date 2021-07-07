function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return item;
  });
  return images;
}

export const heroImages = importAll(require.context("../assets/heroes", true));
