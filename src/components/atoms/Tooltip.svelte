<script>
	import { onMount } from 'svelte';

	export let tip = '';
	export let active = false;

	let loaded = false;
	onMount(() => (loaded = true));
</script>

<!-- preventing layout shifts by checking if page is fully loaded. if not, return original slot -->
{#if loaded && tip}
	<div class="relative inline-block">
		<span class="tooltip font-font-two absolute inline-block whitespace-nowrap opacity-0 invisible left-1/2 top-0 leading-normal" class:active>
			{tip}
		</span>
		<span class="tooltip-slot">
			<slot />
		</span>
	</div>
{:else}
	<slot />
{/if}

<style>
    .tooltip {
      opacity: 0;
      visibility: hidden;
      transform: translate(-50%, -120%);
      transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out;
      padding: 0.15rem 0.5rem;
	    border-radius: 6px;
		background-color: var(--accent);
		color: var(--elevation-one);
		font-size: 0.9rem;
		font-weight: 300;
		letter-spacing: -0.075em;
    }
  
    .relative:hover .tooltip {
      opacity: 1;
      visibility: visible;
      margin-top: -8px;
    }
  </style>