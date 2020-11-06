module.exports = {
  'ignorePatterns' : ['node_modules/'],
  'settings'       : {
    'propWrapperFunctions' : ['forbidExtraProps'],
    'react'                : {
      'version' : '^16.6.3'
    }
  },
  'parser' : 'babel-eslint',
  'rules'  : {
    'consistent-return'    : 'off',
    'object-curly-spacing' : ['error', 'always'],
    'quotes'               : ['error', 'single'],
    'semi'                 : 'error',
    'key-spacing'          : ['error', {
      'align'      : { 'on' : 'colon', 'beforeColon' : true, 'afterColon' : true },
      'multiLine'  : { 'beforeColon' : true, 'afterColon' : true },
      'singleLine' : { 'beforeColon' : true, 'afterColon' : true }
    }],
    "indent": ["error", 2, {
      "VariableDeclarator" : {
        "var": 2,
        "let": 2,
        "const": 3
      }
    }]
  },
  'plugins' : ['ramda', 'babel', 'jest', 'react'],
  'env'     : {
    'es6'     : true,
    'browser' : true,
    'node'    : true,
    'jasmine' : true,
    'jest'    : true
  },
  'extends' : [
    'eslint:recommended',
    'plugin:ramda/recommended',
    'plugin:react/recommended'
  ]
};
