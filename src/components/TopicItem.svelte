<script>
	let isOpen = false;
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
				Dwivedirahul44 published a new Exercise: Difference of Squares
			</h2>
			<p class="text-xs mt-2">1 week ago</p>
		</div>
	</div>
	{#if isOpen}
		<div class="pl-[60px] pb-5 pt-2">
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure inventore possimus aspernatur
				minima? Sint, temporibus amet fugiat id, dicta natus distinctio officia alias maxime tempora
				laborum sapiente impedit suscipit. Voluptate.
			</p>
		</div>
	{/if}
</div>

<style>
</style>
