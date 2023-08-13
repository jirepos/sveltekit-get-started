<script lang="ts">  

  // import Button from '$lib/Button.svelte'; 
  
  import { Button, ButtonToolbar } from  'naon-sveltestrap';

  const colors: any = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
</script>


 {#each colors as color}
  <div>
    <Button  {color}>{color}</Button>
  </div>
{/each}

<h3>ButtonToolbar</h3>
<!--잘 동작하지 않음-->
<ButtonToolbar>
  <Button>Alpha</Button>
  <Button>Bravo</Button>
  <Button>Charlie</Button>
</ButtonToolbar>