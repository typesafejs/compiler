module.exports = {
  "env": {
    "es6": true
  },
  "extends": "eslint-config-standard",
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "plugins": [
    "jsdoc",
    "sort-class-members"
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
        "checkSetters": 'no-getter',
        "require": {
          "ClassDeclaration": true,
          "MethodDefinition": true
        }
      }
    ],
    "jsdoc/require-param": 2,
    "jsdoc/require-param-type": 2,
    "jsdoc/require-property-type": 2,
    "jsdoc/require-returns": [2, {
      "forceRequireReturn": true
    }],
    "jsdoc/require-returns-type": 2,
    "no-unused-vars": 2,
    "sort-class-members/sort-class-members": [
			2,
			{
				"accessorPairPositioning": "getThenSet",
        "order": [
					"[static-properties]",
					"[static-methods]",
					"constructor",
					"[properties]",
					"[conventional-private-properties]",
					"[methods]",
					"[conventional-private-methods]"
				],
			}
		],
    "sort-imports": ["error", {
      "allowSeparatedGroups": false,
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    "sort-keys": ["error", "asc", {"caseSensitive": false, "minKeys": 2, "natural": false}]
  }
}