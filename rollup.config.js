import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/entry.js',
  output: {
    name:'template',
	file: 'dist/out.js',
    format: 'es',
  },
  plugins: [
    terser()
  ]
};