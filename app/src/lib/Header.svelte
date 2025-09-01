<script lang="ts">
	import { goto } from "$app/navigation";

    export let path;
</script>

<header>
    <button onclick={() => {
        if (path){
            goto(`/${path}`)
        }else{
            goto("/")
        }
    }}>←</button>
</header>


<style>
    header{
        display: flex;
        justify-content: space-between;
        border-bottom: solid 1px #acabab;
        padding: 1rem;
        text-align: right;
    }
</style>