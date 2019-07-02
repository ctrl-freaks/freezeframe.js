/* eslint-disable no-param-reassign */

export default (window) => {
  window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      drawImage() {}
    };
  };
  window.HTMLCanvasElement.prototype.addEventListener = (event, cb) => {
    cb(event);
  };
  window.HTMLImageElement.prototype.addEventListener = (event, cb) => {
    cb(event);
  };
};
