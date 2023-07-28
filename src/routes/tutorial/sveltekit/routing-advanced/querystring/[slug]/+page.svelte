<script lang="ts">
  import { page } from '$app/stores';
  let pageInfo = JSON.stringify($page);
  
  // 다음 URI로 접근 시 
  // http://ejin.com:5173/tutorial/sveltekit/routing-advanced/querystring/aa?name=abc&age=10
  //   {
  // 	"error": null,
  // 	"params": {
  // 		"slug": "aa"
  // 	},
  // 	"route": {
  // 		"id": "/tutorial/(sveltekit)/sveltekit/routing-advanced/querystring/[slug]"
  // 	},
  // 	"status": 200,
  // 	"url": "http://ejin.com:5173/tutorial/sveltekit/routing-advanced/querystring/aa?name=a bc&age=10",
  // 	"form": null,
  // 	"data": {
  // 		"title": "Hello world!",
  // 		"content": "Welcome to our blog. Lorem ipsum dolor sit amet..."
  // 	}
  // }
</script>
<h3>Query String</h3>

{pageInfo}
<hr>


<ul>
  <li>
    Page 
    <ul>
      <li>
        $page.error : {$page.error}
      </li>
      <li>
        $page.params : {$page.params?.slug}
      </li>
      <li>
        $page.status : {$page.status}
      </li>
      <li>
        $page.route.id : {$page.route.id}
      </li>
      <li>
        $page.url : {$page.url}
      </li>
      <li>
        $page.status = {$page.status}
      </li>
      <li>
        $page.form : {$page.form}
      </li>
      <li>
        $page.data.title : {$page.data?.title}
      </li>

    </ul>

  </li>
</ul>
