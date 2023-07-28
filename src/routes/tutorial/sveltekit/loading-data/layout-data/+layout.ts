/** @type {import('./$types').LayoutLoad} */
// +layout.server.ts일 때 사용
// /** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    return {
        post: {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        }
    };
}