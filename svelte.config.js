// import adapter from '@sveltejs/adapter-auto';
// nodejs 환경에서 운영되는 서버 배포를 위한 어댑터로 변경 
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

// https://kit.svelte.dev/docs/configuration
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	// a11y 경고 막기
	onwarn: (warning, handler) => {
		if(warning.code.startsWith('a11y-')) return
		if(warning.code === 'css-unused-selector') return;
		if(warning.code === 'a11y-click-events-have-key-events') return;
    if(warning.code === 'a11y-no-noninteractive-element-interactions') return;
		if(warning.code === 'a11y-no-static-element-interactions') return;
		if(warning.code === 'a11y-media-has-caption')	return;
		handler(warning);	
	},
	kit: {
		csrf: false, 
		adapter: adapter(
			{
				// 빌드 출력 디렉토리 
				out: 'build' // 디폴트는 build
			}
		),
		// alias 설정
		// 별칭은 Vite 및 TypeScript에 자동으로 전달된다고 하는데 VSCode에서는 오류로 표시됨 
		// tsconfig.json에 paths 설정을 추가해야 함
		alias: {
			// alias 설정 
			'$apps':      './src/apps',
			'$tutorial':  './src/tutorial',
			'$ux':        './src/ux',
			// $lib과 $app는 예약어 이므로 사용하지 말 것
			// $app: './src/lib/app',  // src/lib 아래로 경로 설정하면 정상 동작하지 않음 
		},		
		version: {
			// 이름을 기준으로 새 버전 감지 
			name: "1.0.0",
			// 0 이면 새 버전을 폴링하지 않음 
			pollInterval: 0  // 간격은 밀리초 
		},
		paths: {
			base: '' // defulat 값은 "", '/kit'로 설정하면 브라우저에서 /aa/bb 를 /kit/aa/bb로 호출해야 
		},		
		// 환경 설정 파일 디렉토리 
		env :  {
			privatePrefix: "PRIVATE_", // default ""
			publicPrefix: "PUBLIC_",   // default "PUBLIC_"
			dir: "env"  // default "." 
		}
	}
};

export default config;
