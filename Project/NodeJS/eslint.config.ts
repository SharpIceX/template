import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	eslint.configs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		rules: {
			eqeqeq: 'error',
		},
		ignores: ['node_modules'],
	},
]);
