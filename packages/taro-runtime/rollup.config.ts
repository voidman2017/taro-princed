import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import _ from 'lodash'
import { defineConfig } from 'rollup'
import externals from 'rollup-plugin-node-externals'

import type { RollupOptions } from 'rollup'

const baseConfig = {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    exports: 'named'
  },
  plugins: [
    externals(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['ie >= 11']
          }
        }]
      ],
      extensions: ['.ts', '.js']
    })
  ]
}

const variesConfig: RollupOptions[] = [{
  output: {
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
}, {
  output: {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
}, {
  output: {
    file: 'dist/runtime.esm.js',
    format: 'es',
  },
}]

export default defineConfig(variesConfig.map(v => {
  const customizer = function (objValue, srcValue) {
    if (Array.isArray(objValue)) {
      return objValue.concat(srcValue)
    }
    if (typeof objValue === 'object') {
      return _.mergeWith({}, objValue, srcValue, customizer)
    }
  }
  return _.mergeWith({}, baseConfig, v, customizer)
}))
