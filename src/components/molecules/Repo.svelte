<script lang="ts">
	import { onMount } from 'svelte';
	import type { Repo } from '../../utils/types';

	import { StarIcon } from '@indaco/svelte-iconoir/star';
	import { GitForkIcon } from '@indaco/svelte-iconoir/git-fork';
	import { OpenNewWindowIcon } from '@indaco/svelte-iconoir/open-new-window';

	let repos: Repo[];

	onMount(async () => {
		const response = await fetch('https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=sailorsnow');
		let unpatched = await response.json();
		// patch repo owners having a slash at the end of them
		for (let i = 0; i < unpatched.length; i++) {
			const element = unpatched[i];
			if ((element.owner as string).endsWith('/')) {
				unpatched[i].owner = unpatched[i].owner.slice(0, -1);
			}
		}
		repos = unpatched;
	});
</script>

        <div class="grid gap-[0.8rem] flex-col justify-center items-center grid-cols-[1fr] md:grid-cols-[1fr_1fr] relative mb-8 lg:mb-12">
            {#if repos}
                {#each repos as { link, owner, repo, description, languageColor, language, stars, forks }}
                    <a href={link} target="_blank" rel="noreferrer" class="no-underline text-text-primary h-full rounded-lg">
                        <div class="repo-card bg-elevation-two min-h-[140px] h-full flex flex-col gap-1 justify-between backdrop-blur-[5px] bg-blend-overlay border border-elevation-four px-5 py-4 rounded-lg border-solid hover:-translate-y-0.5 hover:shadow-[0px_15px_25px_-10px_rgba(0,0,0,0.25)]">
                            <div class="flex justify-between">
                                <div class="info">
                                    <slot />
                                    <img
                                        src="https://github.com/{owner}.png"
                                        alt="{owner}'s profile"
                                        class="h-4 rounded-[50%]"
                                    />
                                    <h6>{owner}</h6>
                                </div>
                                <div class="hover:brightness-[1.3]">
                                    <OpenNewWindowIcon color="var(--text-secondary)" size="20px" />
                                </div>
                            </div>
                            <div>
                                <h3>{repo}</h3>
                                <h6>{description}</h6>
                            </div>
                            <div class="info-container flex gap-[0.9rem]">
                                <div class="info">
                                    <span class="dot h-[11px] w-[11px] inline-block rounded-[50%]" style="background-color: {languageColor}" />
                                    <h6>{language}</h6>
                                </div>
                                <div class="info">
                                    {#if stars}
                                        <StarIcon color="var(--text-secondary)" size="16px" />
                                        <h6>{stars}</h6>
                                    {/if}
                                </div>
                                <div class="info">
                                    {#if forks}
                                        <GitForkIcon color="var(--text-secondary)" size="16px" />
                                        <h6>{forks}</h6>
                                    {/if}
                                </div>
                            </div>
                        </div>
                    </a>
                {/each}
            {:else}
                {#each Array(4) as _}
                    <div class="repo-card animate-shimmer bg-[1200px_100%] bg-slate-300 bg-gradient-to-r from-elevation-two from-[8%] via-elevation-one via-[18%] to-elevation-two to-[33%]" />
                {/each}
            {/if}
        </div>

<style>
	.repo-card {
        @apply bg-elevation-two min-h-[140px] h-full flex flex-col gap-1 justify-between backdrop-blur-[5px] bg-blend-overlay border border-elevation-four px-5 py-4 rounded-lg border-solid hover:-translate-y-0.5 hover:shadow-[0px_15px_25px_-10px_rgba(0,0,0,0.25)];
        transition: transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one);
    }

    .info {
        @apply flex gap-[0.2rem] items-center;
    }
</style>