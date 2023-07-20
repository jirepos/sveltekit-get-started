import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({params}) {

  // rest parameters 사용 
  console.log(params); 

  return {
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  };

}