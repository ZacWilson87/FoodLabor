<script>
  export let recordList = [];

</script>

<main>
  <div class="display-box">
    {#each recordList as aRecord}
      <div class="dbEntry">
        <p>
          {aRecord.for_date}
        </p>
        <p>
          {aRecord.daily_sales}
        </p>
        <p>
          {aRecord.labor_amount}
        </p>
        <p>
          {aRecord.labor_percent}%
        </p>
        <p>delete</p>
      </div>
      <hr />
    {/each}
  </div>
</main>

<style>
  main {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .dbEntry {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  hr {
    margin: 0;
    width: 98%;
    color: inherit;
  }
  .display-box {
    display: flex;
    flex-direction: column;
    background-color: rgba(170, 170, 170, 0.25);
    min-width: 50%;
    width: auto;
    border-radius: 0.25em;
    align-items: center;
  }

</style>
