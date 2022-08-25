const sveltePreprocess = require('svelte-preprocess');
const sass = require('sass');

module.exports = {
    preprocess: sveltePreprocess({
        sass: {
            sync: true,
            implementation: sass,
        },
    }),
    config: {
        kit: {
            // hydrate the <div id="svelte"> element in src/app.html
            target: '#svelte',
        },
    },
};
