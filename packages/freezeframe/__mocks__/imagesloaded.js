export default (images) => {
  const on = (event, cb) => {
    if (cb instanceof Function) {
      images.forEach((img) => {
        cb(this, { img });
      });
    }
    return { on };
  };
  return { on };
};
