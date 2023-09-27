<script lang="ts">
    export let show = true;
    export let isMobile = false
</script>

(#if show)
<section class="min-h-screen bg-slate-800">
    Sidenav that shouuld hide on small screen
</section>

<style>
    section {
        width: 800px;
    }
</style>
