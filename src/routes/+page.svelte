<script>
  import { version } from '$lib/my-lib.js'
  import yirae from '$lib/img/yirae.png';
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<a href="/about">about</a>
<h2>{version}</h2>
<img src={yirae} alt="Welcome" />


