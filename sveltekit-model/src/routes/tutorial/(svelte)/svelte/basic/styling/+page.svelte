<script lang="ts">

  // class
  let isActive:boolean = true;
  let active:string = 'active';
  let isAdmin:boolean = true;

  let enabled:boolean = false;
  let inactive:string = 'inactive';

  // style 
  let color = "red";
  let bg = "gray"; 

</script>


<!-- These are equivalent -->
<div class={isActive ? 'active' : ''}>isActive ? 'active' : ''</div>
<div class:active={isActive}>class:active={`{isActive}`}</div>
<!-- Shorthand, for when name and value match -->
<div class:active>class:active</div>

<!-- Multiple class toggles can be included -->
<!-- <div class:active class:inactive={!active} class:isAdmin>inactive</div> -->
<div class:inactive>inactive</div>
<!-- class="active inactive"가 적용됩니다.  -->
<div class:active class:inactive={!enabled}>inactive</div>


<!-- style section  -->
<div style="color:{color}">
  Color
</div>
<div style:color style:background-color={bg}>
  Color
</div>



<style>
	.active {background-color: #ff3e00; color: white;}
  .inactive {background-color: yellow; color: #666;}
</style>


