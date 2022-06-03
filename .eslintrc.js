module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

		'prettier/prettier': [
			'error',
			{
				semi: true,
				singleQuote: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 120,
				quoteProps: 'consistent',
				bracketSpacing: true,
				bracketSameLine: false,
				singleAttributePerLine: true,
				arrowParens: 'always',
				htmlWhitespaceSensitivity: 'strict',
				vueIndentScriptAndStyle: true,
			},
		],
	},
};
