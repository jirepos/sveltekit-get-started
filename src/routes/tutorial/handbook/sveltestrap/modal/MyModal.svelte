<script>
  import {
    createEventDispatcher,
    onDestroy,
    onMount,
    afterUpdate
  } from 'svelte';  
  
  import InlineContainer from './InlineContainer.svelte';
  import Portal from './Portal.svelte';

  let outer;
  export let container = undefined; 
  let staticModal = false;
  export { staticModal as static };
  let isOpen = false;
  let hasOpened = false; 
  let _isMounted = false;

  // 처음 로딩 시 
  // container는 undefined 
  // staticModal은 false
  // 그래서 Portal이 반환 
  $: outer = container === 'inline' || staticModal ? InlineContainer : Portal;

  // Lifecyclle
  onMount(() => {
    // console.log('onMount');
    if (isOpen) {
      hasOpened = true;
    }
    _isMounted = true;
  });

  afterUpdate(() => {
    // console.log('afterUpdate');
  });

  const onToggle = () => {
    staticModal =  !staticModal; 
  }
</script>

{#if _isMounted}
  <svelte:component this={outer}>
    <!-- outer 컴포넌트의 slot에 이 컨텐츠가 전달된다. -->*
    <div>
      <h3>Wrapper</h3>
      <div>
        <h1>Main</h1>
        <!-- 
          MyModal을 사용하는 부모 컴포넌트에서 전달된 컨텐츠가
          slot에 표시된다.-->
        <slot/>
      </div>  
    </div>
  </svelte:component>
{/if}

<button on:click={onToggle}>Click</button>