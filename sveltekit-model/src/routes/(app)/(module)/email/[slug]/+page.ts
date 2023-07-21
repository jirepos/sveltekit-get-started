/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    mailBoxId: params.slug
  };
}