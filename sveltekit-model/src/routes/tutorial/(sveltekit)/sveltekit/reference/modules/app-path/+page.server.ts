import { base, assets } from '$app/paths';


// https://kit.svelte.dev/docs/modules#$app-paths-base 
//
// base는 config.kit.paths.base의 값이다. 
// assets는 config.kit.paths.assets의 값이다.
export function load() {
  // 설정된 값이 없어서 출력되지 않는다. 
  console.log("base:" + base); 
  console.log("assets:" + assets); 
}