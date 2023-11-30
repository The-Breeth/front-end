module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: ['prefer-arrow'],
    rules: {
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ],
        'no-console': ['error', { allow: ['error'] }],
        'capitalized-comments': [
            'error',
            'always',
            {
                ignorePattern: 'console',
            },
        ],
        'vue/multi-word-component-names': 'off',
    },
}
