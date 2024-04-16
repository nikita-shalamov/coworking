module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    plugins: ["@typescript-eslint", "react", "react-refresh"],
    rules: {
        "prettier/prettier": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
    },
}
