<script>
  import { page } from '$app/stores';

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>
<main>
  <h2>Layout Data</h2>
  <slot/>
</main>


<aside>
  <div>
    +layout.ts에서 반환한 데이터를 사용할 수 있습니다. {data.post.title} 
  </div>
  
  <div>
    +page.ts에서 반환한 데이터를 사용할 수 있습니다. {$page.data.title}
  </div>  

</aside>
