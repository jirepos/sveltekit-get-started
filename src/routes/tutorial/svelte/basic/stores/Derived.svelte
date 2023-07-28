<script la="ts">

  import { elapsed } from './stores-derived';

</script>

<h3>Derived</h3>
This page has been open for
{$elapsed}
{$elapsed === 1 ? 'second' : 'seconds'}