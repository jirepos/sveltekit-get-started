import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    // 디렉토리 이름이 [slug]이면 params.slug로 접근 가능합니다. 
    if (params.slug === 'u1234') {
       // 리터럴 객체를 반환합니다. 
        return {
            userId: params.slug, 
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    // 조건에 맞지 않으면 404 에러를 반환합니다.
    throw error(404, 'Not found');
}