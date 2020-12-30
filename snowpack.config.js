/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/dist' },
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
        [
            'snowpack-plugin-svgr',
            {
                /* see "Plugin Options" below */
            },
        ],
        [
            '@snowpack/plugin-babel',
            {
                //input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
                transformOptions: {
                    // babel transform options
                    presets: ['@babel/preset-react', '@babel/preset-typescript'],
                },
            },
        ],
    ],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
        port: 3000,
    },
    buildOptions: {
        /* ... */
    },
    experiments: {
        optimize: {
            bundle: true,
            minify: true,
            target: 'es2020',
        },
       // source: 'skypack',
    },
    proxy: {
        /* ... */
    },
    alias: {
        '@app': './src/some/deep/folder',
        '@app1': './src',
        /* ... */
    },
}
