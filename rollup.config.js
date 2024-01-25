
import { readFileSync } from 'fs';

import nodeResolve   from '@rollup/plugin-node-resolve';
import commonjs      from '@rollup/plugin-commonjs';
import replace       from '@rollup/plugin-replace';

import nodePolyfills from 'rollup-plugin-polyfill-node';

const pkg = JSON.parse(readFileSync('./package.json').toString());





const esm = {

  input: 'build/index.js',

  output: {
    file   : 'dist/esm/index.mjs',
    format : 'es',
    name   : 'csv_by_rfc'
  },

  plugins : [

    replace({
      preventAssignment      : true,
      'process.env.NODE_ENV' : JSON.stringify( 'production' )
    }),

    nodePolyfills(),

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]

};





const cjs = {

  input: 'build/index.js',

  output: {
    file   : 'dist/cjs/index.cjs',
    format : 'cjs',
    name   : 'csv_by_rfc'
  },

  plugins : [

    replace({
      preventAssignment      : true,
      'process.env.NODE_ENV' : JSON.stringify( 'production' )
    }),

    nodePolyfills(),

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.ts' ],
      preferBuiltins : false
    }),

    commonjs()

  ]

};





export default [esm, cjs];
