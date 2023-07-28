<script lang="ts">

  import MyButton from './MyButton.svelte';
  import Alert from './Alert.svelte'

   

  let close = false; 
  let outline = false; 
  let color = "primary";
  let close_var = close? 'btn-close': 'btn'; 
  let close_var2 =  close || 'btn';  // close가 false이므로 'btn'이 할당됩니다.
  let close_var3 = close || `btn${outline ? '-outline' : ''}=${color}`;
  let active = false;
  let active_var = { active }; 

  import classnames from './myutil'; 
  // filter(Boolean)
  let array = [false, 0, -0, 0n, "", null, undefined, NaN, {hello: "world"}];
  console.log(array.filter(Boolean)); // [{hello: "world"}]

  let classes = classnames(close_var, close_var2, close_var3, {active});
  console.log(classes); 

  // let disabled = true; 

  function handleEvent(event) {
    console.log(event);
  }

  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];


  let visible = true;

</script>

<h3>표현식</h3>
<ul>
  <li>close_var: {close_var}</li>
  <li>close_var2: {close_var2}</li>
  <li>close_Var3: {close_var3}</li>
  <li>active_var: {active}</li>
</ul>

<hr>

<h3>Button</h3>
<hr>
<MyButton color="primary" size="lg"  on:click={handleEvent}>
  Click!!
</MyButton>
<br>
<br>
<hr>
{#each colors as color}
  <div>
    <MyButton size="sm"  {color}>{color}</MyButton>
  </div>
{/each}
<br>
<MyButton color="primary" href="http://www.naver.com" size="lg"  on:click={handleEvent}>
  Go to Naver!!
</MyButton>
<hr>

<Alert color="primary" isOpen={visible} toggle={() => (visible = false)}>
  I can be controlled via <code>isOpen</code> and <code>toggle</code>.
</Alert>

<Alert
  color="secondary"
  isOpen={visible}
  toggle={() => (visible = false)}
  fade={false}
>
  I am a primary alert and I can be dismissed without animating!
</Alert>
<hr>
<hr>