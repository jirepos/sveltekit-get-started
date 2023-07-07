import { redirect } from '@sveltejs/kit';
import { browser } from '$app/environment';


// ssr을 사용하지 않음 
export const ssr = false;

export function load() {
 
  // +page.server.js에서는 작성하지 마세요 
  if (browser) { // to prevent error window is not defined, because it's SSR
     window.location.href = 'https://www.naver.com';
  }
}