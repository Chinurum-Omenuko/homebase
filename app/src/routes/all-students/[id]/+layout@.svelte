<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';

    let { children } = $props();
</script>

<Header path="all-students"/>
{@render children?.()}