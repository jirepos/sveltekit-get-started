<script lang="ts">
  import imagesLoaded from 'imagesloaded';
	import { onMount } from 'svelte';

	onMount(() => {
    imagesLoaded( '#imageList', function() {
      // images have loaded
      alert("images have loaded");
    });
	});
</script>

<div id="imageList">
  <img src="http://t1.daumcdn.net/movie/4a0dd880c1145e2e54eee76443048d0e07c5d357" alt="image2">
  <img src="https://usefulguide.net/wp-content/uploads/2022/08/img_theme5.jpg.webp" alt="image2">
</div>
