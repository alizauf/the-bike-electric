import svelte from 'rollup-plugin-svelte';
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import babel from "rollup-plugin-babel";
import replace from 'rollup-plugin-replace';

const config = require(process.env.CONFIG || './config/nyc.js')

export default {
	entry: 'main.js',
	dest: 'bundle.js',
	format: 'iife',
	plugins: [
		svelte(),
		resolve({
    }),
    commonjs({
      ignoreGlobal: true
    }),
    globals(),
    babel({
      exclude: "node_modules/**"
    }),
    replace(config),
	]

};
