module.exports = {
  extends: ['stylelint-config-html', 'stylelint-config-recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
  },
  ignoreFiles: ['dist/**/*'],
};
