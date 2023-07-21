/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    boardId: params.slug
  };
}