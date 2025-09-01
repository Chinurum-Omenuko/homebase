<script lang="ts">
  export let data;
  const student = data.student;
</script>

<div class="student-view">
  <h1>{student.name}</h1>

  <div class="info">
    <p><span>Grade:</span> {student.grade ?? "N/A"}</p>
    <p><span>Age:</span> {student.age ?? "N/A"}</p>
    <p><span>Subjects:</span> {student.subjects?.join(", ") || "None"}</p>
    <p><span>Traffic:</span> {student.traffic}</p>
    <p><span>Teacher:</span> {student.teacher ?? "Unassigned"}</p>
    <p><span>Price:</span> ${student.price}</p>
    <p><span>Occurrence:</span> {student.occurrence}</p>
    <p><span>Status:</span> {student.status}</p>
    <p><span>Date Started:</span> 
      {student.dateStarted 
        ? new Date(student.dateStarted).toLocaleDateString() 
        : "Not set"}
    </p>
  </div>

  <a href={`/all-students/${student.name}/edit`} class="edit-btn">
    Edit Student
  </a>
</div>

<style>
  .student-view {
    max-width: 400px;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info p {
    font-size: 1rem;
    color: #444;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
  }

  .info span {
    font-weight: bold;
    color: #222;
    margin-right: 0.5rem;
  }

  .edit-btn {
    display: block;
    text-align: center;
    margin-top: 2rem;
    background: #000000;
    color: white;
    font-size: 1rem;
    padding: 0.75rem;
    text-decoration: none;
  }

  .edit-btn:hover {
    background: #0d0d0e;
  }
</style>
