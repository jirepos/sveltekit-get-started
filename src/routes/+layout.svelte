<!-- 최상위 레이아웃 -->
<script>
  import { env as penv }  from '$env/dynamic/public';
  const PUBLIC_STYLE_SERVER_DOMAIN = penv.PUBLIC_STYLE_SERVER_DOMAIN;
</script>

<svelte:head>
	<title>SvelteKit 1.0</title>
	<link href="{PUBLIC_STYLE_SERVER_DOMAIN}/resources/libs/bootstrap-5.3.0/css/bootstrap.min.css" rel="stylesheet" />
	<link href="{PUBLIC_STYLE_SERVER_DOMAIN}/resources/framework/styles/global.css" rel="stylesheet" />
  <link rel="stylesheet" href="{PUBLIC_STYLE_SERVER_DOMAIN}/resources/libs/jquery-ui-1.13.2/jquery-ui.css" />	
	<script src="{PUBLIC_STYLE_SERVER_DOMAIN}/resources/libs/bootstrap-5.3.0/js/bootstrap.bundle.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
</svelte:head>
<slot />
