// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// preprocess: preprocess(),
	// a11y 경고 막기
	// onwarn: (warning, handler) => {
	// 	if(warning.code.startsWith('a11y-')) return
	// 	if(warning.code === 'css-unused-selector') return;
	// 	if(warning.code === 'a11y-click-events-have-key-events') return;
  //   if (warning.code === 'a11y-no-noninteractive-element-interactions') return;
	// 	handler(warning);
	// },
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			// alias 설정 
			'$src': './src',
			$components: './src/components',
			$tutorial:  './src/tutorial',
		},
		version: {
			name: "1.0.0",
			pollInterval: 0
		},
		paths: {
			base: '' // defulat 값은 "", '/kit'로 설정하면  /aa/bb 를 /kit/aa/bb로 호출해야 
		}
		// env :  {
		// 	dir: "env"
		// }
	}
};

export default config;
