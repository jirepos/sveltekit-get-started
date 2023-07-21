export function load({params, route, url}) {
  
  //http://ejin.com:5173/tutorial/sveltekit/routing/querystring/abc?name=abc&age=10
  console.log("params => " , params);   // params =>  { slug: 'abc' }
  console.log("params.slug => ", params.slug); // params.slug =>  abc
  console.log("route.id => ", route.id); // route.id =>  /tutorial/(sveltekit)/sveltekit/routing/querystring/[slug]

  // https://developer.mozilla.org/en-US/docs/Web/API/URL
  console.log("url.origin => ", url.origin);  // url.origin =>  http://ejin.com:5173
  console.log("url.hostname => ", url.hostname); //url.hostname =>  ejin.com
  console.log("url.port => " , url.port);  // url.port =>  5173
  // console.log("url.hash => ", url.hash); // 에러발생 
  console.log("url.href => ", url.href); //url.href =>  http://ejin.com:5173/tutorial/sveltekit/routing/querystring/abc?name=abc&age=10

  console.log("url.pathname => ", url.pathname); // url.pathname =>  /tutorial/sveltekit/routing/querystring/abc
  console.log("url.searchParams => ", url.searchParams); //  url.searchParams =>  URLSearchParams { 'name' => 'abc', 'age' => '10' }

  return {
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  };
}