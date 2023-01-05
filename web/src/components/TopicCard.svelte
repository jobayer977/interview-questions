<script>
	export let data;
	console.log("🚀 ~ file: TopicCard.svelte:3 ~ data", data)
</script>
<div class="bg-white box px-4 py-2">
	<div class="flex">
		<div class="mr-4">
			<img
				src="{data?.image}"
				class="w-[80px]"
				alt=""
				height="80"
				width="80"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-lg font-bold mb-2">{data?.title}</h2>
			<div class="box-meta lg:flex lg:space-x-4 space-y-2 lg:space-y-0">
				<div class="flex items-center space-x-3">
					<img
						src="/exercises.svg"
						alt=""
						height="20"
						width="20"
					/>
					<p class="text-primary text-xs">{data?.duration}</p>
				</div>
				<div class="flex items-center space-x-3">
					<img
						src="/concepts.svg"
						alt=""
						height="20"
						width="20"
					/>
					<p class="text-primary text-xs">{data?.topics} Topics</p>
				</div>
			</div>
			<div class="tags mt-3 hidden lg:flex">
				{#each data?.tags||[] as item}
					<span class="text-xs text-primary bg-[#F0F5FF] px-2 py-1 rounded-md mr-2 uppercase"> {item} </span>
				{/each}
			</div>
		</div>
	</div>
</div>
<style lang="postcss">
	.box {
		box-shadow: 0 0 13px #e1ebff;
		border-radius: 8px;
		padding: 20px 24px;
	}
	.box-meta {
	}
	.box-meta img {
		height: 20px;
		width: 20px;
		filter: invert(35%) sepia(3%) saturate(6422%) hue-rotate(208deg) brightness(94%) contrast(87%);
	}
</style>
