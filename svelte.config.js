import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$src: 'src',
			$lib: 'src/lib',
			$uikit: 'src/components/uikit',
			$views: 'src/components/views',
			$forms: 'src/conponents/forms',
			$stores: 'src/stores',
			$api: 'src/api',
		}
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	]
};

export default config;
