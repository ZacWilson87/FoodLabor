<script>
</script>

<!--HTML-->
<div class="container">
  <h2>Enter a new record:</h2>
  <div class="record">
    <label for="date"
      >Date
      <input type="date" id="date" />
    </label>

    <label for="sales"
      >$ Sales
      <input type="number" id="sales" />
    </label>

    <label for="labor"
      >$ Labor
      <input type="date" />
    </label>
    <div class="labor-percent">
      <h3>Labor %</h3>
      <h4 class="labor-output">Test</h4>
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
    align-self: center;
    text-align: center;
  }
  label,
  .labor-percent {
    display: flex;
    flex-direction: column;
    width: 15%;
  }
</style>
