<script>
  import { beforeUpdate, afterUpdate } from "svelte";

  import { deleteRecord } from "../api/records";

  export let recordList = [];

  let salesTotal = 0;
  let laborTotal = 0;
  let percentTotal = 0;

  afterUpdate(async () => {});

  const deleteThisRecord = async (id) => {
    const response = await deleteRecord(id);
    deleteRecFromView(id);
    //location.reload();
    return response;
  };
  /*
  //MAYBE to delete record and update view?
  afterUpdate(async (id) => {
    const res = await deleteThisRecord(id);
    deleteRecFromView(id);
    return res;
  }); 
*/
  const addTotals = () => {
    for (let rec of recordList) {
      salesTotal += rec.daily_sales;
      laborTotal += rec.labor_amount;
      percentTotal += rec.labor_percent;
    }
    percentTotal = percentTotal / recordList.length;
    percentTotal = Math.round(percentTotal * 100) / 100;
  };

  ///////////////WIP//////////////////////////////
  const deleteRecFromView = (thisId) => {
    for (let rec of recordList) {
      if (thisId == rec.id) {
        recordList.splice(recordList[rec], 1);
      }
      console.log(rec);
    }
    return;
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
    <div class="entry-titles">
      <h4>Totals</h4>
      <h4>{salesTotal}</h4>
      <h4>{laborTotal}</h4>
      <h4>{percentTotal}%</h4>
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

</style>
