<script lang="ts">
    import HeroImg from '../../assets/hero.webp?url';

	let zoom: boolean;
	let xRotation: number;
	let yRotation: number;

	function enterRotate3D(e: MouseEvent) {
		zoom = true;
		let img = e.target as HTMLDivElement;
		yRotation = 13 * ((e.offsetX - img.clientHeight / 2) / img.clientWidth);
		xRotation = -13 * ((e.offsetY - img.clientWidth / 2) / img.clientHeight);
	}

	function leaveRotate3D() {
		zoom = false;
		yRotation = 0;
		xRotation = 0;
	}
</script>

<div class="img-container z-10 animate-[float_5s_ease-in-out_infinite]">
	<img 
        src={HeroImg} 
        alt="Hero"
        class="hidden lg:block w-96 h-96 z-10 rounded-3xl self-start" 
        on:mousemove={enterRotate3D} 
        on:mouseleave={leaveRotate3D} 
        style="transform: perspective(500px) {zoom ? 'scale(1.025)' : ''} rotateX({xRotation}deg) rotateY({yRotation}deg);"
    />
</div>

<style>
    img {
        transition: width 0.4s var(--bezier-one), transform 0.4s var(--bezier-one);
    }
</style>