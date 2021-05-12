<script>
  let choiceChosen = "";
</script>

<main>
  <div class="view-by-container">
    <h2>View By:</h2>

    <label for="viewByChoice" />
    <select
      name="viewByChoice"
      id="viewByChoice"
      class="input-wrapper"
      bind:value={choiceChosen}
    >
      <option value="" disabled select hidden>Select</option>
      <option value="date">Day</option>
      <!--Change logic for how this will work-->
      <option>Week/Custom</option>
      <option value="month">Month</option>
    </select>

    {#if !choiceChosen}
      <input type={choiceChosen} style="display: none" class="search-label" />
    {/if}

    {#if choiceChosen == "date"}
      <input type={choiceChosen} class="search-label" />
    {/if}

    {#if choiceChosen == "Week/Custom"}
      <div class="input-wrapper">
        <h3>Start Date:</h3>
        <input type="date" class="search-label" />

        <h3>End Date:</h3>
        <input type="date" class="search-label" />
      </div>
    {/if}

    {#if choiceChosen == "month"}
      <input type={choiceChosen} />
    {/if}
  </div>
</main>

<style>
  .view-by-container {
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  #viewByChoice {
    width: 12%;
  }
  h2,
  h3 {
    color: rgb(194, 194, 194);
    margin-right: 1%;
  }
  input {
    text-align: right;
  }
  select,
  option {
    width: 10%;
    text-align: center;
    margin: 1%;
    border-radius: 0.25em;
  }
  .input-wrapper {
    display: flex;
    flex-direction: row;
    width: 50%;
    justify-content: space-between;
    margin-top: 2%;
  }
</style>
