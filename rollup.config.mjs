import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";

const entries = {
  "@xvue/shared": "packages/shared/src/index.ts",
  "@xvue/reactivity": "packages/reactivity/src/index.ts"
};

export default {
  input: {
    reactivity: "packages/reactivity"
  },
  plugins: [
    nodeResolve(),
    commonJS(),
    alias({
      entries
    })
  ],
  output: {
    dir: "dist",
    format: "cjs"
  }
};
// ,{
// 		dist: 'dist',
// 		file: 'reactivity.js',
// 		format: 'esm'
// 	},{
// 		dist: 'dist',
// 		file: 'reactivity.js',
// 		format: 'iife'
// 	}]
// };