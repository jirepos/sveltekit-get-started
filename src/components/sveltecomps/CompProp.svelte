<script lang="ts">

  // export를 사용하면 컴포넌트의 prop를 생성한다. 
  export let foo: string;

  // Values that are passed in as props
  // are immediately available
  console.log({ foo });

</script>

<h2>Export creates a component prop</h2>

prop foo의 값은 : {foo}

