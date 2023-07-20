module.exports = {
	root: true,
  // settings: {
	// 	// a11y 경고 막기 
  //   'svelte4/ignore-warnings': (warning) => {
	// 		return warning.code.startsWith('a11y-')
  //     // return warning.code === 'a11y-click-events-have-key-events'
  //   },
  // },	
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
