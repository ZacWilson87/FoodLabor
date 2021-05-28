<script>
  import { createRecord } from "../api/records";
  var date;
  var salesDollar = null;
  var laborDollar = null;
  var laborPercent = "waiting...";
  var message = "";

  let convertToPercentageSubmit = () => {
    //laborDollar validation
    if (laborDollar == 0) {
      message = "You cannot divide by Zero";
      return;
    } else if (
      laborDollar == null ||
      salesDollar == null ||
      typeof date == "undefined"
    ) {
      message = "All fields must be filled out";
      return;
    } else {
      laborPercent = (laborDollar / salesDollar) * 100;
      message = `New record entered for ${date}`;
    }

    //let returnedPercent = laborPercent.toString().slice(0, 5); //use Math obj instead?

    laborPercent = Math.round(laborPercent * 100) / 100;

    //laborPercent = returnedPercent;

    // create record object to use for api storage
    let newRecord = {
      daily_sales: salesDollar,
      for_date: date,
      labor_amount: laborDollar,
      labor_percent: laborPercent,
    };

    createRecord(newRecord);
    // send new record to records api
  };

</script>

<!--HTML-->
<div class="container">
  <h2>Enter a new record:</h2>

  <div class="record">
    <label for="date">
      Date
      <input type="date" id="date" bind:value={date} required />
    </label>

    <label for="sales">
      Sales Dollar
      <input type="number" id="sales" bind:value={salesDollar} />
    </label>

    <label for="labor">
      Labor Dollar
      <input type="number" bind:value={laborDollar} required />
    </label>

    <button class="submitRecord" on:click={convertToPercentageSubmit}
      >submit</button
    >

    <h4>{message}</h4>

    <div class="labor-percent">
      <h3>Labor Percent:</h3>
      <p class="labor-output">{laborPercent}%</p>
    </div>
  </div>
</div>

<!--CSS-->
<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .record {
    align-items: center;
  }
  label,
  .labor-percent {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.1rem;
    align-items: center;
    justify-content: center;
    margin: 1em;
  }
  .labor-percent {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    color: rgb(146, 146, 146);
  }
  input {
    justify-content: center;
    align-items: center;
    margin: 0.5em;
  }
  h4 {
    color: rgb(255, 104, 104);
  }

</style>
