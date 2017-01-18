import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const plugins = [
  vue({
    compileTemplate: true
  }),
  buble({
    objectAssign: 'Object.assign',
    jsx: 'h'
  }),
  nodeResolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  replace({
    'process.env.NODE_ENV': JSON.stringify( 'development' )
  })
]

export default {
  entry: './src/index.js',
  dest: './dest/functional.js',
  format: 'iife',
  sourceMap: true,
  plugins: plugins
}
