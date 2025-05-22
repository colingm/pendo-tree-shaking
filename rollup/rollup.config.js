import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'pendo-agent.mjs',
  output: {
		file: 'pendo-agent.js',
    format: 'iife',
  },
  plugins: [ json(), nodeResolve() ]
};
