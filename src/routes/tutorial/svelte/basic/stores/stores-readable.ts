import {  readable } from 'svelte/store';

// readable은 두 개의 파라미터를 갖습니다. readable의 값은 외부에서 설정될 수 없습니다. 
// 다음의 형식으로 호출합니다. 
//
// readable(초기값, (set, update?) => { ... });
// - set : set 함수 
// - update : update 함수
// Writable과 마찬가지로 stop function을 반환합니다. 
export const time = readable(new Date(), function start(set) {

  const interval = setInterval(() => {
    set(new Date());  // 값을 설정합니다. 
  }, 1000);
   
  // stop funtion을 반환합니다.
  return function stop() {
    clearInterval(interval);
  };

});

export const ticktock = readable('tick', (set, update) => {
  const interval = setInterval(() => {
    update((sound) => (sound === 'tick' ? 'tock' : 'tick'));
  }, 1000);
 
  return () => clearInterval(interval);
});