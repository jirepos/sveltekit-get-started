import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export function load() {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
}