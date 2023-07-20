// import adapter from '@sveltejs/adapter-auto';
// nodejs 환경에서 운영되는 서버 배포를 위한 어댑터로 변경 
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(
			{
				// 빌드 출력 디렉토리 
				out: 'build' // 디폴트는 build
			}
		),
		// alias 설정
		alias: {
			// alias 설정 
			$components: './src/components',
			$tutorial:  './src/tutorial',
		},		
		version: {
			// 이름을 기준으로 새 버전 감지 
			name: "1.0.0",
			// 0 이면 새 버전을 폴링하지 않음 
			pollInterval: 0  // 간격은 밀리초 
		},
		// 환경 설정 파일 디렉토리 
		env :  {
			dir: "env"
		}
	}
};

export default config;
