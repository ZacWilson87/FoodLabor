<script>
  import { beforeUpdate } from "svelte";

  import { deleteRecord } from "../api/records";

  export let recordList = [];

  let salesTotal = 0;
  let laborTotal = 0;
  let percentTotal = 0;

  const deleteThisRecord = async (id) => {
    const response = await deleteRecord(id);

    location.reload();
    return response;
  };

  const addTotals = () => {
    for (let rec of recordList) {
      salesTotal += rec.daily_sales;
      laborTotal += rec.labor_amount;
      percentTotal += rec.labor_percent;
    }
  };

  ///////////////WIP//////////////////////////////
  const deleteRecFromView = (id) => {
    for (let rec in recordList) {
      if (rec[id] == id) {
        recordList.splice(i, 1);
      }
    }
    return;
  };

  beforeUpdate(async () => {
    salesTotal = 0;
    laborTotal = 0;
    percentTotal = 0;
    addTotals();
    console.log("hi");
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
        <p id="deleteButton" on:click={deleteThisRecord(aRecord.id)}>X</p>
      </div>
      <hr />
    {/each}

    {salesTotal}
    {laborTotal}
    {percentTotal}
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

</style>
