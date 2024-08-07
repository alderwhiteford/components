import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json' assert { type: 'json' }

export default [
    {
        // entry point for the library
        input: 'src/index.ts',
        // output for the library build
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx']
            }),
            postcss({ 
                extensions: ['.css'], 
                inject: true, 
                extract: false, 
                modules: true 
            })
        ]
    }, 
    {
        // entry point for the types
        input: 'dist/esm/types/index.d.ts',
        // output for the types build
        output: {
            file: packageJson.types,
            format: 'esm'
        },
        plugins: [dts()],
        external: [/\.css$/],
    }
]