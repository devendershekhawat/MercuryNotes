module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'plugin:import/errors',
		'plugin:jsx-a11y/recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'import', 'jsx-a11y'],
	rules: {
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0,
		quotes: [2, 'single', { avoidEscape: true }]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
