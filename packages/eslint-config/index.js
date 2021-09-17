module.exports = {
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "plugins": [
    "jsdoc"
  ],
  "rules": {
    "jsdoc/no-undefined-types": [2,
      {
        "definedTypes": ["Buffer"]
      }
    ],
    "jsdoc/require-jsdoc": [
      2,
      {
        "checkConstructors": false,
        "require": {
          "ClassDeclaration": true,
          "MethodDefinition": true
        }
      }
    ],
    "jsdoc/require-param": 2,
    "jsdoc/require-returns": [2, {
      "forceRequireReturn": true
    }],
    "jsdoc/require-returns-type": 2,
    "no-unused-vars": 2
  }
}