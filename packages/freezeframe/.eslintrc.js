module.exports = {
  env: {
    browser: true
  },
  extends: [
    '@thrivehive/node'
  ],
  plugins: [
    'babel',
    '@typescript-eslint',
  ],
  rules: {
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'babel/semi': 1,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-unused-vars': 'error'
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  }
};
