module.exports = {
  env: {
    browser: true
  },
  extends: [
    '@thrivehive/node'
  ],
  rules: {
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0
  }
};
