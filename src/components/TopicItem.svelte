<script lang="ts">
	import { slide } from 'svelte/transition';
	import hljs from 'highlight.js';
	import md from 'markdown-it';
	import { readingTime } from '../utils';
	let isOpen = false;
	export let data;
	export let sectionData;
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
	<div class="item flex space-x-2 mb-3 cursor-pointer items-center" on:click={() => (isOpen = !isOpen)}>
		<div>
			<div class="flex items-center space-x-2 ">
				<div class="h-2 w-2 bg-primary rounded-full opacity-80"></div>
				<h2 class="text-base font-medium">
					{data.title}
				</h2>
			</div>
			<p class="text-xs mt-2 pl-5">{readingTime(data?.content)}</p>
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
