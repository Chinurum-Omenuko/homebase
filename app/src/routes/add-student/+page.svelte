<script lang="ts">
  import type { Student, Subject, Teacher } from "../../types/Student";

  // Form state
  let name = "";
  let grade = 0;
  let age = 0;
  let subjects: Subject[] = [];   // bound to a select
  let traffic = "";
  let teacher: Teacher;
  let price = 0;
  let occurrence = 0;
  let status = "";
  let dateStarted = "";

  // Submit handler
  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const student: Student = {
      name,
      grade,
      age,
      subjects, // backend expects List<Subject>
      traffic,
      teacher,
      price,
      occurrence,
      status,
      dateStarted
    };

    try {
      const response = await fetch(`https://pk-sheets-api.onrender.com/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });

      if (response.ok) {
        alert("Student added!");
      } else {
        const errorText = await response.text();
        alert("Failed to add student: " + errorText);
      }
    } catch (err) {
      console.error("Error adding student:", err);
      alert("Something went wrong!");
    }
  };
</script>

<form id="studentForm" on:submit|preventDefault={handleSubmit}>
  <h2>Student Form</h2>

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} required />
  </div>

  <div class="form-group">
    <label for="grade">Grade</label>
    <input type="number" id="grade" bind:value={grade} min="1" max="12" required />
  </div>

  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" id="age" bind:value={age} min="1" required />
  </div>

  <div class="form-group subjects">
    <label>Subject</label>

    <section class="subject-options">
      <div>
        <input type="checkbox" bind:group={subjects} value="MATH" required />
        <label>
          Math
        </label>
      </div>
  
      <div>
        <input type="checkbox" bind:group={subjects} value="ENGLISH" />
        <label>
          English
        </label>
      </div>
  
      <div>
        <input type="checkbox" bind:group={subjects} value="FRENCH" />
        <label>
          French
        </label>
      </div>
  
      <div>
        <input type="checkbox" bind:group={subjects} value="CODING" />
        <label>
          Coding
        </label>
      </div>
    </section>
  </div>


  <div class="form-group">
    <label for="traffic">Traffic</label>
    <input type="text" id="traffic" bind:value={traffic} required />
  </div>

  <div class="form-group">
    <label for="teacher">Teacher</label>
    <select id="teacher" bind:value={teacher} required>
      <option value="Chinurum">Chinurum</option>
      <option value="Joy">Joy</option>
    </select>
  </div>

  <div class="form-group">
    <label for="price">Price ($)</label>
    <input type="number" step="0.01" id="price" bind:value={price} required />
  </div>

  <div class="form-group">
    <label for="occurrence">Occurrence</label>
    <input type="number" id="occurrence" bind:value={occurrence} min="1" required />
  </div>

  <div class="form-group">
    <label for="status">Status</label>
    <select id="status" bind:value={status} required>
      <option value="ACTIVE">Active</option>
      <option value="NOTACTIVE">Not Active</option>
      <option value="PENDING">Pending</option>
    </select>
  </div>

  <div class="form-group">
    <label for="dateStarted">Date Started</label>
    <input type="date" id="dateStarted" bind:value={dateStarted} required />
  </div>

  <button type="submit">Submit</button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 2rem auto;
    font-family: Arial, sans-serif;
    padding: 1rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    font-weight: bold;
    color: #222;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    outline: none;
    color: #333;
  }

  input:focus,
  select:focus {
    border-bottom: 1px solid #007bff;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background: #007bff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
  }

  button:hover {
    background: #0056b3;
  }

  .subject-options{
    display: flex;
    justify-content: space-between;
  }

</style>
