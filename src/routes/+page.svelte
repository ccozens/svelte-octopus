<script lang="ts">
    import { onMount } from "svelte";

    let chart: any; // this will hold the chart instance. Type any as we don't know the chart type yet.

    // render Example once the component mounts
    onMount(async() => {
        chart = await import("../components/Chart.svelte");
    });
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

{#if chart}
    <svelte:component this={chart.default} />
{/if}
