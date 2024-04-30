const jsdoc = require('eslint-plugin-jsdoc')

module.exports = [{
  'plugins': {
    jsdoc: jsdoc,
    'require-sort': require('eslint-plugin-require-sort'),
    'sort-class-members': require('eslint-plugin-sort-class-members')
  },
  'rules': {
    'indent': ['error', 2],
    'jsdoc/no-undefined-types': [2,
      {
        'definedTypes': ['Buffer']
      }
    ],
    'jsdoc/require-jsdoc': [
      2,
      {
        'checkConstructors': false,
        'checkSetters': 'no-getter',
        'require': {
          'ClassDeclaration': true,
          'MethodDefinition': true
        }
      }
    ],
    'jsdoc/require-param': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-returns': [2, {
      'forceRequireReturn': true
    }],
    'jsdoc/require-returns-type': 2,
    'no-console': 2,
    'no-unused-vars': 2,
    quotes: ['error', 'single', { 'avoidEscape': true }],
    'require-sort/require-sort': [
      2,
      {
        'ignoreCase': true
      }
    ],
    'sort-class-members/sort-class-members': [
      2,
      {
        'accessorPairPositioning': 'getThenSet',
        'order': [
          '[static-properties]',
          '[static-methods]',
          'constructor',
          '[properties]',
          '[conventional-private-properties]',
          '[methods]',
          '[conventional-private-methods]'
        ],
      }
    ],
    'sort-imports': ['error', {
      'allowSeparatedGroups': false,
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }],
    'sort-keys': ['error', 'asc', {'caseSensitive': false, 'minKeys': 2, 'natural': false}]
  }
}]