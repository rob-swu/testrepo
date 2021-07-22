const fs = require('fs')
const path = require('path')

module.exports = {
  "extends": [
    "react-app",
    "prettier"
  ],
  "plugins": [
    "prettier",
    "jsx-a11y"
  ],
  "rules": {
    "prettier/prettier": "error",
    "jsx-a11y/href-no-hash": "off",
    "no-console": [ "error", { allow: ["warn", "error"] } ],
  }
};
