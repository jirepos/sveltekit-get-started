<script>
  import Foo from './Foo.svelte';
</script>

<Foo>
  <span slot="content">
    <slot name="content">bar fallback</slot>
  </span>
</Foo>
