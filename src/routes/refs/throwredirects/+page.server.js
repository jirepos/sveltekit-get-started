import { redirect } from '@sveltejs/kit';

export function load() {
  // 예외가 발생했을 때 307 상태 코드를 사용하여 리디렉션할 수 있습니다.
  // throw 메커니즘을 사용하여 한 페이지에서 다른 페이지로 리디렉션할 수도 있습니다.
  // 클라이언트에서 redirect 하려면 +page.js 파일로 작성하세요. 
  // https://learn.svelte.dev/tutorial/redirects
	throw redirect(307, '/refs/dest');
}