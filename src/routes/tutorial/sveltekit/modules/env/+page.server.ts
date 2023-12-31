
// /env/.env 파일의 환경 변수를 읽는 방법 
// 
// 정적 변수는 빌드 시에 자바스크립트 상수로 변환되므로 운영환경에서는 
// .env 파일을 읽어도 값이 변경되지 않는다. 
// import { DATABASE_URL } from '$env/static/private';
// import { PUBLIC_API_URL } from '$env/static/public';
//
// 운영환경에서 .env.mode 파일을 읽어서 쓰려면 동적 변수로 사용해야 한다. 
import { env }  from '$env/dynamic/private';
const NODE_ENV = env.PRIVATE_NODE_ENV; 
const DATABASE_URL = env.PRIVATE_DATABASE_URL;

export function load() {
  console.log('DATABASE_URL', DATABASE_URL);
  console.log('env:', NODE_ENV); 
}