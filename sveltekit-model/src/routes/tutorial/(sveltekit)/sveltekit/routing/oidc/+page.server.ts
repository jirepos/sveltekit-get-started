/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
  // Google에서 로그인하면 이 경로로 리다이렉트합니다. 
  // 이 코드는 반드시 서버에서 실행되어야 합니다. 
  // 여기서 Java Resource의 API를 호출하여 로그인 처리를 합니다. 
  // fetch() 사용
  // Promise.then()에서 redirect 합니다. 
  // TODO: 나중에 검토하기로 합니다. 
}