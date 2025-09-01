<script>
	import { goto } from '$app/navigation';
	import Header from '$lib/Header.svelte';

    let { children } = $props();
</script>

<Header path=""/>
{@render children?.()}


<style>
    header{
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px #acabab;
        padding: 1rem;
        text-align: right;
    }
</style>