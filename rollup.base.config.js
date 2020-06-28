import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import json from 'rollup-plugin-json';
import babel from '@rollup/plugin-babel';
import {
    terser
} from 'rollup-plugin-terser'
import transformPaths from '@zerollup/ts-transform-paths';

const pkg = require('./package.json');

const basePlugins = [
    // Compile TypeScript files
    typescript({
        useTsconfigDeclarationDir: true,
        cacheRoot: '.cache',
        tsconfig: 'tsconfig.json',
        transformers: [service => transformPaths(service.getProgram())]
    }),
    // Allow json resolution
    json(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
        browser: true,
        preferBuiltins: false
    }),
]

const webPlugins = [
    ...basePlugins,
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
        browser: true
    }),

    // Resolve source maps to the original source
    sourceMaps(),
];

const nodejsPlugins = [
    ...basePlugins,
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Resolve source maps to the original source
    sourceMaps(),
];


const mobilePlugins = [
    ...basePlugins,
    // Transform
    babel({
        extensions: ['.js', '.ts'],
    }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
        browser: true
    }),

    // minify
    terser(),

    // Resolve source maps to the original source
    sourceMaps(),
];

export const web = {
    input: 'src/index.ts',
    output: [{
        file: pkg.web,
        name: pkg.alias,
        format: 'iife',
        sourcemap: true
    }],
    plugins: webPlugins,
};
// 专为node设置的，如果需要则在src文件夹中将nodejs的单独放在一个文件中，并修改这里
export const nodejs = {
    input: 'src/index.ts',
    output: [{
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
        esModule: false
    }],
    external: ['crypto', 'events', 'util', 'os'],
    plugins: nodejsPlugins,
};

export const mobile = {
    input: 'src/index.ts',
    output: [{
        file: pkg.browser,
        name: pkg.alias,
        format: 'iife',
        sourcemap: true
    }],
    plugins: mobilePlugins,
};

export const doc = {
    input: 'src/index.ts',
    output: [{
        file: 'type-doc-theme/assets/js/lib.iife.js',
        name: pkg.alias,
        format: 'iife',
        sourcemap: true
    }],
    plugins: mobilePlugins.filter((_, idx, arr) => idx !== arr.length - 2),
};