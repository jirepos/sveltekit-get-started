import { writable, readable, derived } from 'svelte/store';

export const name = writable('world');
// $ 기호를 사용하여 저장소의 값을 읽을 수 있습니다.
export const greeting = derived(name, ($name) => `Hello ${$name}!`);
