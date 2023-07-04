<script lang="ts">
  // Organization Module의 Layout입니다. 

  import OrgLeft from './OrgLeft.svelte';

  // Capture Event Handler
  const onMenuSelected = (e:any) => {
    console.log("onMenuSelected: ", e.detail.menuId);
    alert(e.detail.menuId)
  }
  
</script>


<div class="module-main-title">Organization Mgmt.</div>
<div class="container">
  <div class="row">
    <div class="col">
      <OrgLeft on:menu-selected={onMenuSelected} />
    </div>
    <div class="col-6">
      <!-- src/routes/biz/organization/+page.svelte가 slot에 표시됩니다. -->
      <slot/>
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>

