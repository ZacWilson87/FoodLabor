<script>
  var salesDollar;
  var laborDollar;
  var laborPecent;

</script>

<!--HTML-->
<div class="container">
  <h2>Enter a new record:</h2>

  <div class="record">
    <label for="date">
      Date
      <input type="date" id="date" />
    </label>

    <label for="sales">
      Sales(dollar)
      <input type="number" id="sales" bind:value={salesDollar} />
    </label>

    <label for="labor">
      Labor(dollar)
      <input type="number" bind:value={laborDollar} />
    </label>

    <button class="submitRecord">submit</button>

    <div class="labor-percent">
      <h3>Labor %</h3>
      <p class="labor-output">{laborPecent}</p>
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
  }
  input {
    justify-content: center;
    align-items: center;
    margin: 0.5em;
  }

</style>
