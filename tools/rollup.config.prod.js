import typescript from '@rollup/plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './src/index.ts',
    output: [
        {
            file: 'dist/bundle.es.js',
            format: 'es',
            sourcemap: true,
            paths: (id) => {}
        },
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            sourcemap: true,
            paths: (id) => {}
        },
        {
            file: 'dist/bundle.js',
            format: 'umd',
            sourcemap: true,
            name: 'bundle',
            paths: (id) => {}
        }
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        typescript(),
        terser()
    ]
};
