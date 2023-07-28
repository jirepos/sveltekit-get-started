import { readable, derived } from 'svelte/store';

export const time2 = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
 
  return function stop() {
    clearInterval(interval);
  };
});


const start:any = new Date();
// derived (
//   stores,  // 파생할 저장소 
//   fn: (
//      values,
//      set, 
//      update 
// )        
// 콜백은 처음에 첫 번째 구독자가 구독할 때 실행된 다음 저장소 종속성이 변경될 때마다 실행됩니다.
// Svelte에서 $ 문자는 저장소의 값을 "리액티브하게" 읽을 수 있는 방법을 제공합니다. 
// 가장 간단한 형태의 버전으로, 콜백은 파생된 값(derived values)를 반환합니다.
export const elapsed:any = derived(time2, ($time:any) => Math.round(($time - start) / 1000));
