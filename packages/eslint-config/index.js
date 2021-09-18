module.exports = {
  "env": {
    "es6": true
  },
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
				"order": [
					"[static-properties]",
					"[static-methods]",
					"constructor",
					"[properties]",
					"[conventional-private-properties]",
					"[methods]",
					"[conventional-private-methods]"
				],
				"accessorPairPositioning": "getThenSet"
			}
		],
    "sort-keys": ["error", "asc", {"caseSensitive": false, "natural": false, "minKeys": 2}],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
      "allowSeparatedGroups": false
  }]
  }
}