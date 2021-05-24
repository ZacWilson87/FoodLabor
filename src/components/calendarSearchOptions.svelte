<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function searchValue() {
    dispatch("searchValues", {
      dateOne: dateOne,
      dateTwo: dateTwo,
    });

    dateOne = null;
    dateTwo = null;
  }

  let choiceChosen = "";
  let dateOne;
  let dateTwo;

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
      <option>All</option>
      <option value="date">Day</option>
      <option>Week/Custom</option>
      <!-- <option value="month">Month</option>  -->
    </select>

    {#if !choiceChosen}
      <input type="date" style="display: none" class="search-label" />
    {/if}

    {#if choiceChosen == "All"}
      <button on:click={searchValue}>Get All</button>
    {/if}

    {#if choiceChosen == "date"}
      <input bind:value={dateOne} type="date" class="search-label" required />
      <button on:click={searchValue}>Submit</button>
    {/if}

    {#if choiceChosen == "Week/Custom"}
      <div class="input-wrapper">
        <h4>Start Date:</h4>
        <input bind:value={dateOne} type="date" class="search-label" required />

        <h4>End Date:</h4>
        <input bind:value={dateTwo} type="date" class="search-label" required />
      </div>
      <button on:click={searchValue}>Submit</button>
    {/if}
    <!-- 
        {#if choiceChosen == "month"}
      <input type={choiceChosen} />
    {/if}
    -->
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
    width: fit-content;
  }
  h2,
  h4 {
    color: #cfcfcf;
    margin-right: 1%;
  }
  input {
    text-align: right;
  }
  select,
  option {
    width: auto;
    text-align: center;
    margin: 1%;
    border-radius: 0.25em;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1% 0;
    height: auto;
    align-items: baseline;
  }

  button {
    margin: 1%;
  }

</style>
