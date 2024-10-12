<script lang="ts">
	export let href = '#';
	export let section = 'home';
	export let isSelected: boolean;
    export let currentPage: string;

	async function handleClick() {
		if (currentPage !== '/') {
			window.location.href = '/';
		}

		const el = document.querySelector(href);
		if (!el) return;
		el.scrollIntoView(true);
	}
</script>

<li class="no-underline list-none" class:selected={isSelected}>
	<button on:click={handleClick}>
		<div class="icon-container hidden">
			<slot/>
		</div>
		<h5>
			{section}
		</h5>
	</button>
</li>