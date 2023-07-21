/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    articleId: params.slug
  };
}