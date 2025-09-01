<script lang="ts">
	import { goto } from "$app/navigation";
    let studentName = "";
    
    function searchStudent(event: Event) {
        event.preventDefault();
        console.log(`${studentName}`)
        const name = studentName.trim();
        if (!name) return;
        goto(`/all-students/${encodeURIComponent(studentName)}`, { replaceState: true });
    }


</script>

<section class="main">
    <h1>HOMEBASE</h1>
    <form
        id="search-form"
        onsubmit={searchStudent}
    >
        <input
        id="inputbar"
        type="text"
        placeholder="Search for students"
        bind:value={studentName}
        />
        <button type="submit" id="searchsubmit">Search</button>
    </form>
    <button id="add-new" onclick={() => goto("/all-students")}>All Students</button>
    <button id="add-new" onclick={() => goto("/add-student")}>New Student</button>
</section>


<style>
    h1{
        margin-bottom: 30vh;
    }
    #inputbar{
        padding: 10px;
        width: 70vw;
        border: solid 1px black;
        flex: none;
    }

    #add-new{
        border: solid 1px rgb(3, 3, 5);
        padding: 1em;
        flex: none;
        margin-top: 5vh;
    }

    #search-form{
        margin: 0;
        display: flex;
        justify-content: space-around;
    }

    #searchsubmit{
        background-color: black;
        color: white;
        height: 3rem;
        padding: .5em;
    }
</style>