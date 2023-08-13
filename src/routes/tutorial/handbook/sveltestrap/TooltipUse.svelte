<script lang="ts">
  import { Button, Tooltip } from  'naon-sveltestrap';

  const placements = ['top', 'right', 'left', 'bottom'];
</script>

<!-- not working  -->
{#each placements as placement}
  <div class="mt-3">
    <Button id={`btn-${placement}`}>{placement}</Button>
    <Tooltip target={`btn-${placement}`} {placement}>{placement}</Tooltip>
  </div>
{/each}