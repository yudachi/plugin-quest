import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import builtins from 'builtin-modules'

export default {
  input: 'index.es',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: [
    ...builtins,
    // FIXME: use valid source for externals
    '@babel/core',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-json-strings',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-pipeline-operator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@babel/register',
    '@blueprintjs/core',
    '@blueprintjs/datetime',
    '@blueprintjs/select',
    '@exponent/electron-cookies',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome',
    '@skagami/react-fontawesome',
    'babel-plugin-add-module-exports',
    'babel-plugin-dynamic-import-node',
    'babel-plugin-styled-components',
    'bindings',
    'bluebird',
    'chalk',
    'classnames',
    'coffee-react',
    'coffee-script',
    'create-react-class',
    'cson',
    'electron-devtools-installer',
    'electron-log',
    'electron-react-titlebar',
    'electron-updater',
    'fast-memoize',
    'font-awesome',
    'fs-extra',
    'fuse.js',
    'glob',
    'header-case-normalizer',
    'http-proxy-agent',
    'i18n-2',
    'i18next',
    'immutable',
    'json-format',
    'lodash',
    'memoize-one',
    'mime',
    'moment-timezone',
    'mousetrap',
    'node-fetch',
    'npm',
    'npm-package-arg',
    'os-name',
    'pac-proxy-agent',
    'pangu',
    'path-extra',
    'poi-asset-contributor-data',
    'poi-asset-themes',
    'poi-lib-battle',
    'polished',
    'prop-types',
    'react',
    'react-bootstrap',
    'react-dom',
    'react-electron-web-view',
    'react-file-dropzone',
    'react-fontawesome',
    'react-grid-layout',
    'react-i18next',
    'react-redux',
    'react-remarkable',
    'react-resizable-area',
    'react-ultimate-pagination',
    'react-virtualized',
    'reduce-reducers',
    'redux',
    'redux-observers',
    'redux-thunk',
    'request',
    'reselect',
    'semver',
    'socks5-client',
    'styled-components',
    'swf-extract',
    'wanakana',
    'yargs',
  ],
  plugins: [
    resolve({ extensions: ['.js', '.es', '.ts', '.tsx'] }),
    commonjs(),
    babel(),
    json(),
    copy({
      targets: [{ src: './assets/quest.css', dest: './dist/assets' }],
    }),
  ],
}