<script lang="ts">
  export let data;
  let student = structuredClone(data.student);

  async function saveStudent() {
    const res = await fetch(`https://pk-sheets-api.onrender.com/students/${student.name}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });

    if (res.ok) {
      alert("Student updated!");
    } else {
      alert("Failed to update student");
    }
  }

  const allStatuses = ["ACTIVE", "NOT_ACTIVE", "PENDING", "REASON"];
</script>

<div class="form-container">
  <h1>Edit Student</h1>

  <form on:submit|preventDefault={saveStudent} id="editform">
    <label>
      <span>Name</span>
      <input type="text" value={student.name} />
    </label>

    <label>
      <span>Grade</span>
      <input type="number" bind:value={student.grade} placeholder="Ex. 3" />
    </label>

    <label>
      <span>Age</span>
      <input type="number" bind:value={student.age} placeholder="Ex. 10" />
    </label>

  
    <label for="subject">
      <span>Subject</span>
      <select id="subject" name="subject" required>
        <option value="MATH">Math</option>
        <option value="ENGLISH">English</option>
        <option value="FRENCH">French</option>
        <option value="CODING">Coding</option>
      </select>
    </label>

    <label>
      <span>Teacher</span>
      <select id="subject" name="subject" required>
        <option value="Chinurum">Chinurum</option>
        <option value="Joy">Joy</option>
      </select>
    </label>

    <label>
      <span>Price</span>
      <input type="number" step="0.01" bind:value={student.price} placeholder="Ex. 50.00" />
    </label>

    <label>
      <span>Occurrence</span>
      <input type="number" bind:value={student.occurrence} placeholder="Ex. 2 per week" />
    </label>

    <label>
      <span>Status</span>
      <select bind:value={student.status}>
        {#each allStatuses as s}
          <option value={s}>{s.replace("_", " ")}</option>
        {/each}
      </select>
    </label>

    <label>
      <span>Date Started</span>
      <input type="date" bind:value={student.dateStarted} />
    </label>

    <button type="submit">Save</button>
  </form>
</div>

<style>
  .form-container {
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

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    color: #444;
  }

  input,
  select {
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 0.5rem 0;
    font-size: 1rem;
    color: #333;
    background: transparent;
    outline: none;
  }

  input::placeholder {
    color: #aaa;
    font-size: 0.9rem;
  }

  select {
    padding: 0.3rem 0;
  }

  button {
    background: #080a0c;
    color: white;
    font-size: 1rem;
    padding: 0.75rem;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
  }

  button:hover {
    background: #343438;
  }
</style>
