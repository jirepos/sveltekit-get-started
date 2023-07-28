<!-- UseTree.svelte -->
<script lang="ts">
  import Tree from "./Tree.svelte";

  let treeData = {
    data: 'Root',
    expanded: false,
    children: [
        {
            data: 'Child 1', 
            expanded: false, 
            children: [{ data: 'Grand Child 1' }]
        },
        {
            data: 'Child 2', 
            expanded: false, 
            children: [{ data: 'Grand Child 2' }]
        },
        {data: 'Child 3'}
    ]
}

</script>
<h3>Tree</h3>

<Tree data={treeData} />