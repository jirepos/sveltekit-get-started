import { error } from '@sveltejs/kit';
// 이 기능은 +page.svelte와 함께 실행됩니다. 즉, 서버 측 렌더링 중에는 서버에서
// , 클라이언트 측 탐색 중에는 브라우저에서 실행됩니다. 
/** @type {import('./$types').PageLoad} */
// +page.server.ts일 때 사용  
// /** @type {import('./$types').PageServerLoad} *
export function load() {
        // 종종 페이지는 렌더링되기 전에 일부 데이터를 로드해야 합니다.
        // 아래 return 문에 있는 형태의 객체만 반환할 수 있습니다.
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
}