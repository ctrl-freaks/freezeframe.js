module.exports = {
  extends: [
    '@thrivehive/node',
    'react-app'
  ],
  rules: {
    'import/prefer-default-export': 0,
    // 'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
  }
};
