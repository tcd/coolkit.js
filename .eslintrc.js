/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
        "jsdoc",
    ],
    rules: {
        "semi": ["warn", "never"],
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "comma-dangle": ["warn", "always-multiline"],
        "object-curly-spacing": ["warn", "always"],
        "prefer-const": ["warn", { "destructuring": "all" }],
        // "linebreak-style": ["error", "unix"],
        // "no-inline-comments": "off",
        // "no-console": "off",
        // ---------------------------------------------------------------------
        // TypeScript
        // https://github.com/typescript-eslint/typescript-eslint
        // ---------------------------------------------------------------------
        "@typescript-eslint/no-empty-interface": ["off"],
        // "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "no-unused-vars": "off", // This doesn't play nice with TypeScript
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/type-annotation-spacing": ["warn"],
        "@typescript-eslint/ban-ts-comment": ["off"],
        // ---------------------------------------------------------------------
        // JsDoc
        // https://github.com/gajus/eslint-plugin-jsdoc
        // ---------------------------------------------------------------------
        "jsdoc/check-alignment":           ["warn"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
        "jsdoc/require-asterisk-prefix":   ["warn", "always"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-asterisk-prefix
        "jsdoc/multiline-blocks":          ["warn", { "noZeroLineText": true, "noSingleLineBlocks": false }], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-multiline-blocks
        "jsdoc/check-line-alignment":      ["off"], // ["warn", "always"],
        "jsdoc/check-indentation":         ["off"], // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
        "jsdoc/newline-after-description": ["warn", "always"], // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-newline-after-description
        "jsdoc/tag-lines":                 ["warn", "never"], // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-newline-after-description
        "jsdoc/sort-tags":                 ["warn", { "tagSequence": JSDOC_TAGS }], // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-sort-tags
        "jsdoc/check-tag-names":           ["warn", { "definedTags": JSDOC_TAGS }], // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-sort-tags
    },
}
