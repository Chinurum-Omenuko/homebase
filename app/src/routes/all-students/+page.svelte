<script>
	import { goto } from '$app/navigation';

  export let data;
  let students = data.data;
</script>

<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">All Students</h1>

  {#if students.length === 0}
    <p class="text-gray-500">No students found.</p>
  {:else}
    <div class="grid gap-4 ">
      {#each students as student}
        <button
          type="button"
          class="xl p-4 bg-white text-left w-full card"
          on:click={() => goto(`/all-students/${student.name}`)}
          aria-label={`View details for ${student.name}`}
        >
          <h2 class="text-xl font-semibold">{student.name}</h2>
          <div class="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-700">
            <div><strong>Grade:</strong> {student.grade ?? "—"}</div>
            <div><strong>Age:</strong> {student.age ?? "—"}</div>
            <div><strong>Subjects:</strong> {student.subjects?.join(", ")}</div>
            <div><strong>Traffic:</strong> {student.traffic}</div>
            <div><strong>Teacher:</strong> {student.teacher}</div>
            <div><strong>Price:</strong> ${student.price}</div>
            <div><strong>Occurrence:</strong> {student.occurrence}</div>
            <div><strong>Status:</strong> 
              <span class={`px-2 py-1 rounded text-white ${
                student.status === "ACTIVE" ? "bg-green-500" 
                : student.status === "PENDING" ? "bg-yellow-500" 
                : student.status === "NOT_ACTIVE" ? "bg-red-500" 
                : "bg-gray-500"
              }`}>
                {student.status}
              </span>
            </div>
            <div class="col-span-2">
              <strong>Date Started:</strong> 
              {new Date(student.dateStarted).toLocaleDateString()}
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>


<style>
  .card{
    border: solid 1px black;
  }
</style>