<script lang="ts">
	import { page } from '$app/stores';
	export let title = 'QuestionSI | Interview Preparation Made Easy';
	export let description = `Elevate your interviewing skills with our straightforward guide to interview preparation.`;
	export let ogTitle = title;
	let origin = $page?.data?.origin;
	export let ogImage = $page?.data?.origin + '/favicon.png';
	export let ogUrl = $page.url.href;
	export let ogDescription = description;
</script>

<svelte:head>
	<link rel="canonical" href={origin} />
	<title>{title}</title>
	<meta name="Description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={ogDescription} />
	<meta property="og:url" content={ogUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={ogTitle} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="LOOX" />
</svelte:head>