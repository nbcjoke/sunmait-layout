module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "google",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    eqeqeq: "off",
    "require-jsdoc": "off",
    "linebreak-style": "off",
    indent: "2",
  },
};
