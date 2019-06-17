const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const globals = require('rollup-plugin-node-globals');
const builtins = require('rollup-plugin-node-builtins');
const sass = require('rollup-plugin-scss');

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'rollupBundle/bundle.js',
    format: 'umd'
  },
  // external: ['fs'], // tells Rollup 'I know what I'm doing here'
  plugins: [
    nodeResolve({ preferBuiltins: false }), // or `true`
    commonjs(),
    globals(),
    builtins(),
    sass()
  ]
};
