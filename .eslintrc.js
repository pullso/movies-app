module.exports = {
  root: true,
  env: {
    node: 1,
    es6: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "prettier/vue"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // quotes: ['error', 'never'],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
