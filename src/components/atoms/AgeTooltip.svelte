<script lang="ts">
	import Tooltip from '../atoms/Tooltip.svelte';

	// i didnt write this idk
	let getAge = () => {
		let birthDate = new Date('2000/06/24');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(10);
		return preciseAge;
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<Tooltip tip={age}>
    <span class="font-normal text-[0.9rem] bg-elevation-one text-accent w-fit px-2 py-[0.2rem] rounded-[7px]">{Math.floor(Number(age))}</span>
</Tooltip>