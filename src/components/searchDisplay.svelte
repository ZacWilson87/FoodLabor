<script>
  import { beforeUpdate } from "svelte";

  export let recordList = [];
  export let deleteRecord;

  let salesTotal = 0;
  let laborTotal = 0;
  let percentTotal = 0;

  const addTotals = () => {
    for (let rec of recordList) {
      salesTotal += rec.daily_sales;
      laborTotal += rec.labor_amount;
      percentTotal += rec.labor_percent;
    }
    salesTotal = Math.round(salesTotal * 100) / 100;
    laborTotal = Math.round(laborTotal * 100) / 100;
    //console.log(laborTotal);
    if (laborTotal == 0) {
      percentTotal = 0;
    } else {
      percentTotal = percentTotal / recordList.length;
      percentTotal = Math.round(percentTotal * 100) / 100;
    }
  };

  beforeUpdate(async () => {
    salesTotal = 0;
    laborTotal = 0;
    percentTotal = 0;
    addTotals();
  });

</script>

<main>
  <div class="display-box">
    <div class="entry-titles">
      <h3>Date</h3>
      <h3>Sales</h3>
      <h3>Labor</h3>
      <h3>Labor Percent</h3>
    </div>

    {#if salesTotal == 0 || laborTotal == 0}
      <h3>No Entries</h3>
    {:else}
      {#each recordList as aRecord}
        <div class="dbEntry">
          <p>{aRecord.for_date}</p>
          <p>{aRecord.daily_sales}</p>
          <p>{aRecord.labor_amount}</p>
          <p>{aRecord.labor_percent}%</p>
          <p id="deleteButton" on:click={deleteRecord(aRecord.id)}>X</p>
        </div>
        <hr />
      {/each}
    {/if}

    <div class="entry-titles">
      <h3>Totals</h3>
      <h3>{salesTotal}</h3>
      <h3>{laborTotal}</h3>
      <h3>{percentTotal}%</h3>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .entry-titles,
  .dbEntry {
    display: grid;
    width: 100%;
    grid-template-columns: 24% 24% 24% 24% 4%;
    text-align: center;
  }

  .dbEntry:nth-child(4n + 2) {
    background-color: rgba(170, 170, 170, 0.25);
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
  #deleteButton {
    color: rgb(255, 132, 95);
    font-weight: bolder;
    cursor: pointer;
  }

  #deleteButton:hover {
    color: rgb(184, 90, 90);
  }

  @media only screen and (max-width: 570px) {
    .display-box {
      width: 100%;
    }
  }

</style>
