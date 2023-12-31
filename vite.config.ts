import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';


export default defineConfig({
	plugins: [
		// 순서대로 실행된다. 
		sveltekit(),
		
		viteStaticCopy({
      targets: [
        {
          // src: '.env.*', // root 의 .env.* 파일들 
          // dest: 'env' //  .svelte-kit/output/env로 복사된다. 
          src: 'env', // root의 env 디렉토리 
          dest: './'  //  .svelte-kit/output/env로 복사된다. 
        }
      ]
    })
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				   @import '$lib/tutorial/styles/variables.scss';
					 @import '$lib/tutorial/styles/mixin.scss';
				`,
			}
		}
	},
	build: {
	}	 
});
