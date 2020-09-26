module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-classes-per-file': 'off',
    'import/extensions': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/require-component-is': 'off', // This rule is broken, gives false negatives
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // array.reduce
          'e', // error
          'ctx', // koa
          'req', // express
          'request', // express
          'res', // express
          'response', // express
          'state', // vuex,
          '$el', // dom forEach
        ],
      },
    ],
    'no-else-return': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': 'off',
    'no-shadow': 'off',
    'func-names': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
