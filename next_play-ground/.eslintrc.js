module.exports = {
  env: {
    broswer: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended', 
    'standard-with-typescript',
    "prettier"
  ],
  overrides: [],
  parserOptions: {
    project: '**/tsconfig.json',
    ecamVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
