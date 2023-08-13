<script lang="ts">
  // https://select2.org/getting-started/installation
  
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment'

  let selectEl; 

  const initSelect = () => {
    if(browser) { 
      setTimeout(() => {
        // javascript loading 순서로 인해 jQuery와 select2 둘 다 체크해야 함 
        // @ts-ignore
        if(window.jQuery && window.jQuery.fn.select2) {
          // @ts-ignore
          selectEl = window.jQuery('.js-example-basic-single').select2();
        }else { 
          console.log('jQuery is not defined');
          initSelect();
        }
      }, 100);
    }
  };
  
  onMount( () => {
    initSelect();
  });


  onDestroy( () => {
    selectEl.select2('destroy');
  });
</script>

<select class="js-example-basic-single" name="state" multiple >
  <option value="AL">Alabama</option>
  <option value="WY">Wyoming</option>
  <option value="MY">Myoming</option>
  <option value="KY">Kyoming</option>
  <option value="WY">W2yoming</option>
  <option value="WY">W3yoming</option>
  <option value="WY">W4yoming</option>
  <option value="WY">Wy5oming</option>
</select>
