module.exports = {
  env: {
    browser: true
  },
  extends: [
    '@thrivehive/node'
  ],
  plugins: [
    'babel'
  ],
  rules: {
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'babel/semi': 1,
  },
  parser: 'babel-eslint'
};
