import { writable, readable, derived } from 'svelte/store';
 
// '외부' 구성 요소에서 설정할 수 있는 값이 있는 저장소를 만드는 기능입니다.
// 추가 set 및 update 메서드가 있는 객체로 생성됩니다.
// number 값을 갖는 쓰기 객체 
export const count = writable(0);

const count2 = writable(0, 
  // 두 번째 인자로 함수를 전달할 수 있습니다.
  // 구독자가 0에서 1로 될 때 호출됩니다. 
  () => {
    console.log('got a subscribe');
    // stop function 반환합니다. 
    // 구독자가 0일 때 호출됩니다.  
    return () => {
      console.log('no more subscribe');
    };
});

count2.set(1);

// 구독자가 증가하므로 두 번째 인자로 전달된 함수가 호출됩니다. 
const unsubscribe = count2.subscribe((value) => {
  console.log("subscriber1", value); 
});
// 구독자가 증가하므로 두 번째 인자로 전달된 함수가 호출됩니다. 
const unsubscribe2 = count2.subscribe((value) => {
  console.log("subscriber2", value); 
});


// 값을 증가 시킵니다. 
count2.update((value) => value + 1);

unsubscribe();
// 구독자가 0이므로 stop function이 호출됩니다. 
unsubscribe2();





// readable은 두 개의 파라미터를 갖습니다. 
// 첫번째는 초기값이고, 두번째는 값을 설정하는 함수입니다.
// readable의 값은 외부에서 설정될 수 없습니다. 
// readable(초기값, (set) => { ... });
// export const time = readable(new Date(), function start(set) {
//   const interval = setInterval(() => {
//     set(new Date());
//   }, 1000);
 
//   return function stop() {
//     clearInterval(interval);
//   };
// });

// const start:any = new Date();
// export const elapsed:any = derived(time, ($time:any) => Math.round(($time - start) / 1000));

// export const name = writable('world');
// export const greeting = derived(name, ($name) => `Hello ${$name}!`);