<script lang="ts">
</script>

<!-- restProps가 button의 속성으로 설정됩니다.  -->

<!-- <button name="btn1" id="btn1" class="btn1"><div>Click Me!!</div></button> -->

<button 
 {...$$restProps}
 >
  <slot></slot>
</button>