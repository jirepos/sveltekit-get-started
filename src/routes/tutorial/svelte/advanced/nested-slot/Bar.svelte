<script>
  import Foo from './Foo.svelte';
</script>

<Foo>
  <!-- Foo의 content slot에 span 컨텐츠를 넣어 준다. -->
  <span slot="content">
    <!-- content 라는 이름의 slot을 정의한다.  -->
    <slot name="content">bar fallback</slot>
  </span>
</Foo>
