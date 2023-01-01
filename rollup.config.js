import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/entry.js',
  output: {
    name:'js-template',
	file: 'dist/out.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};