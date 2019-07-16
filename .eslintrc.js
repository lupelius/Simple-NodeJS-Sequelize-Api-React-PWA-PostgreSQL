// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['standard'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'max-len': [1, 80, 2, { ignoreComments: true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Disable `no-console` rule
    'no-console': 0,
    // Give a warning if identifiers contain underscores
    'no-underscore-dangle': 1,
    // Paren rule is required to prevent strange errors from prettify, since it
    // doesn't yet fully support Vue
    'space-before-function-paren': ['error', 'never'],
    semi: ['error', 'always'],
    'no-var': 'error'
  }
};
