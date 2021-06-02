<script>
</script>

<header>
  <div class="nav-links">
    <a id="newRecord" href="#/enter-record">Create Record</a>
    <a id="search" href="#/search">Search</a>
  </div>
  <h4 id="headerTitle">
    <a href="https://github.com/ZacWilson87/FoodLabor">Food & Labor Tracker</a>
  </h4>
</header>
<hr />

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-bottom: 1px;
    align-items: baseline;
  }

  header .nav-links {
    margin-left: 3%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-between;
    width: 15%;
  }
  .nav-links a {
    text-decoration: none;
    color: rgb(194, 194, 194);
    display: flex;
    flex-direction: row;
    padding-right: 3%;
  }

  #headerTitle {
    margin-right: 3%;
    color: rgb(194, 194, 194);
  }

  hr {
    width: 98%;
  }

  a:hover {
    color: white;
  }
  a {
    text-decoration: none;
    color: rgb(194, 194, 194);
  }
  @media only screen and (max-width: 600px) {
    .nav-links a {
      font-size: 0.8em;
      padding-left: 0.5em;
    }
  }

</style>
