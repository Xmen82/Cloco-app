module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: "vuetify",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off",
    "vue/script-indent": "off",
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    "vue/v-bind-style": "off",
    "space-before-function-paren": "off",
    "vue/attributes-order": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
