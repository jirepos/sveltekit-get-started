import { env } from '$env/dynamic/private';
// /env/.env 환경변수 조회 
const DATABASE_URL:any = env.DATABASE_URL; 

export function load() {
  console.log('DATABASE_URL', DATABASE_URL);
}