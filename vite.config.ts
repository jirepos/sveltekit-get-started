import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				   @import '$lib/styles/variables.scss';
					 @import '$lib/styles/mixin.scss';
				`,
			}
		}
	}	
});
