import { writable, readable, derived } from 'svelte/store';
 
// '외부' 구성 요소에서 설정할 수 있는 값이 있는 저장소를 만드는 기능입니다.
// 추가 set 및 update 메서드가 있는 객체로 생성됩니다.
export const count = writable(0);

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
 
  return function stop() {
    clearInterval(interval);
  };
});

const start:any = new Date();
export const elapsed:any = derived(time, ($time:any) => Math.round(($time - start) / 1000));

export const name = writable('world');
export const greeting = derived(name, ($name) => `Hello ${$name}!`);