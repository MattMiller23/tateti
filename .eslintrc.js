module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': './tsconfig.json',
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            { 'SwitchCase': 1 },
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single',
            { 'avoidEscape': true }
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'settings': {
        'react': {
          'version': 'detect',
        },
      },
};
