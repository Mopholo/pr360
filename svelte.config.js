import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$css: 'src/css',
			$scss: 'src/scss',
			$lib: 'src/lib',
			$uikit: 'src/components/uikit',
			$views: 'src/components/views',
			$forms: 'src/conponents/forms',
			$stores: 'src/stores',
			$api: 'src/api',
		}
	}
};

export default config;
