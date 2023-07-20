import { error } from '@sveltejs/kit';
// import User from '$lib/js/biz/organization/user'; 

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.userid === 'ejin') {

        // load function 에서는 객체를 되돌릴 수 없음 
        // 다음과 같은 에러가 발생한다. 
        // returned a non-plain object, but must return a plain object at the top level (i.e. `return {...}`)
        // let userInfo  = new User(); 
        // userInfo.name = "이진";
        // userInfo.age = 20;
        // return userInfo; 

        return {
            userId: params.userid
        };
    }
    throw error(404, 'Not found');
}
