module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        quotes: ['error', 'single'],
        semi: false,
        trailingComma: 'none'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
