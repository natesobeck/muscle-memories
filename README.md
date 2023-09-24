<tr>
  <td><%= exercise.exercise.equipment %> <%= exercise.exercise.name %></td>
  <td><%= exercise.sets %></td>
  <td><%= exercise.reps %></td>
  <td><%= exercise.rpe %></td>
  <td><%= exercise.tempo %></td>
  <% if (program.addedBy._id.equals(user?.profile._id)) { %>
  <td>
    <form
        action="/programs/<%= program._id %>/exercises/<%= exercise._id %>?_method=DELETE"
        method="POST"
    >
      <button type="submit">X</button>
    </form>
  </td>
  <% } %>
</tr>


<div class="exercise-card">
  <table>
    <tr>
      <th>Name</th>
      <th>Sets</th>
      <th>Reps or Rep Range</th>
      <th>RPE/RIR</th>
      <th>Tempo</th>
      <% if (program.addedBy._id.equals(user?.profile._id) && program.workouts.length) { %>
        <th></th>
      <% } %>
    </tr>
    <% program.workouts.forEach(workout => { %>
      <tr>
        <td><%= exercise.exercise.equipment %> <%= exercise.exercise.name %></td>
        <td><%= exercise.sets %></td>
        <td><%= exercise.reps %></td>
        <td><%= exercise.rpe %></td>
        <td><%= exercise.tempo %></td>
        <% if (program.addedBy._id.equals(user?.profile._id)) { %>
        <td>
          <form
              action="/programs/<%= program._id %>/exercises/<%= exercise._id %>?_method=DELETE"
              method="POST"
          >
            <button type="submit">X</button>
          </form>
        </td>
        <% } %>
      </tr>
    <% }) %>
  </table>
</div>