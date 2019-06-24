module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attributes-order': 'warning',
    'vue/no-confusing-v-for-v-if': 'warning',
    'vue/order-in-components': 'warning',
    'vue/this-in-template': 'warning',
    'vue/require-default-prop': 'warning',
    'vue/require-prop-types': 'warning'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
