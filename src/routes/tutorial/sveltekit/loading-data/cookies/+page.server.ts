/** @type {import('./$types').PageServerLoad} */
export function load({ params, route, cookies, setHeaders }) {

  const visited = cookies.get('visited');
  cookies.set('visited', 'true', { path: '/' });
  console.log('visited', visited);


  // // url 정보 사용 
  // console.log("route.id=", route.id); 

  // // 쿠키와 헤더는 확인하지 못했음 
  // // 쿠키 사용 
  // console.log("sessionid=", cookies.get("sessionid"));
  // cookies.set("sessionid", "1234567890", {
  //   path : '/',
  //   maxAge: 60 * 60 * 24 * 365,
  //   httpOnly: false
  // });
  // 헤더 설정 
  // setHeaders( {
  //     'X-Content-Type': 'text/plain'
  // });

  // // 반환 값 
  // return {
  //     post: { 
  //         title: 'Hello world!',
  //     }
  // };
}