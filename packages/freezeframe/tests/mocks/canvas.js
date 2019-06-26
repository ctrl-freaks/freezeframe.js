/* eslint-disable no-param-reassign */

export default (window) => {
  window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      drawImage() {}
    };
  };
};
