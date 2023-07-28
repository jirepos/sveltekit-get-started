/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    emailId: params.slug
  };
}