<script>
    import Thumb from "$lib/thumb.svelte";
	import { onMount } from "svelte";
    onMount(() =>{
        setTimeout(() =>{
            loading = false;
        }, 5000)
    })
    let loading = true

</script>



<div class="flex subscription justify-between px-8 flex-wrap">
    <Thumb
     title = "city"
     thumbnail = "photo1.jpg"
     avatar = "photo2.jpg"
     creator = "Jonny jpg"
     views = "23"
     id={1}
     loading = {loading}
     />
    <Thumb 
     title = "video1"
     thumbnail = "photo3.jpg"
     avatar = "photo4.jpg"
     creator = "Jonny jpg"
     views = "70"
     id={2}
     loading = {loading}
     />
    <Thumb 
     title = "video2"
     thumbnail = "photo5.jpg"
     avatar = "photo6.jpg"
     creator = "Jonny jpg"
     views = "20"
     id={3}
     loading = {loading}
     />
    <Thumb 
    title = "video3"
    thumbnail = "photo7.jpg"
    avatar = "photo8.jpg"
    creator = "Jonny jpg"
    views = "2"
    id={4}
    loading = {loading}
    />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
</div>

<style>
    .flex {
        padding-bottom: 4rem;
        max-width: 1600px;

    }
</style>