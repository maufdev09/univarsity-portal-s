// @ts-check

import eslint from '@eslint/js';
import globals from "globals";
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
        globals: {
           ...globals.node,
        }
    }
},
  
  {
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        'prefer-const': "warn",
        'no-console': "warn",


    }
},
{
ignores: ["**/node_modules/","**/dist/"],
}


);