<script lang="ts">
	import { slide } from 'svelte/transition';
	import hljs from 'highlight.js';
	import md from 'markdown-it';
	import { readingTime } from '../utils';
	let isOpen = false;
	export let data;
	const markdonw = md({
		langPrefix: 'language-',
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}
			return '';
		},
		html: true
	});
</script>
<div class="mb-8 relative">
	<div class="item flex space-x-2 mb-3 cursor-pointer " on:click={() => (isOpen = !isOpen)}>
		<img
			class="h-[50px] w-[50px] object-contain mr-3"
			src="https://dg8krxphbh767.cloudfront.net/tracks/abap.svg"
			alt=""
		/>
		<div class="">
			<h2 class="text-base font-medium">
				{data.title}
			</h2>
			<p class="text-xs mt-2">{readingTime(data?.content)}</p>
		</div>
	</div>
	{#if isOpen}
		<div class="pb-5 pt-2" transition:slide>
			<div class="markdown-body px-5 pt-2 pb-10 lg:pl-10">
				{@html markdonw.render(data?.content)}
			</div>
		</div>
	{/if}
</div>
<style>
</style>
